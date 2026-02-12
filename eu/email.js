emailjs.init('1pDnNMu_s_V5xRmzQ'); // Substitua pelo seu ID do EmailJS

        function sendEmail() {
            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let mensagem = document.getElementById("mensagem").value;

            emailjs.send("service_2vb23de", "template_qqghbxy", {
                to_name: nome,
                from_email: email,
                message: mensagem
            }).then(response => {
                alert("E-mail enviado com sucesso!");
                console.log("E-mail enviado:", response);
            }).catch(error => {
                alert("Erro ao enviar e-mail.");
                console.log("Erro:", error);
            });

        }

        