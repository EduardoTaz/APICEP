document.getElementById('cepForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let cep = document.getElementById('cep').value;
    cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos

    console.log("CEP enviado para API:", cep); // Verifica o CEP antes de enviar

    if (cep.length !== 8) {
        alert("Digite um CEP válido com 8 dígitos.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/cep/${cep}`);
        const data = await response.json();

        console.log("Resposta da API no front:", data); // Verificar a resposta no console

        if (data.error) {
            alert(data.error);
            document.getElementById('result').style.display = 'none';
        } else {
            document.getElementById('resultCep').textContent = data.cep ?? "N/A";
            document.getElementById('resultLogradouro').textContent = data.logradouro ?? "N/A";
            document.getElementById('resultBairro').textContent = data.bairro ?? "N/A";
            document.getElementById('resultCidade').textContent = data.localidade ?? "N/A";
            document.getElementById('resultEstado').textContent = data.uf ?? "N/A";
            document.getElementById('resultRegiao').textContent = data.regiao ?? "N/A";
            document.getElementById('result').style.display = 'block';
        }
    } catch (error) {
        console.error('Erro ao consultar CEP:', error);
        alert('Erro ao consultar CEP. Tente novamente.');
        document.getElementById('result').style.display = 'none';
    }
});
