// Função pra lidar com requisição ascincrona 

const request = async (URL) => {

    try {

        const promise = await fetch(URL);
        const response = await promise.json();
        const divResult = document.getElementById('result');
        divResult.innerHTML += JSON.stringify(response);
        //opcional:  console.log(response); 

    } catch (error) {
        console.log(`Erro de requisição: ${error}`);
    }

}


let Url = './controller/server.php?status=?';

// Opções de requisição:

// Verificar o status do servidor:
// let Url = './controller/server.php?status=?';

// Inserir um novo usuário e score:
// let Url = './controller/server.php?name=Nome+de+usuário&score=2000';

// Puxar totos os usuarios com seus referentes scores:
// let Url = './controller/server.php?users=?';

request(Url); // Chamando a função