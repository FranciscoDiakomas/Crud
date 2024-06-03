window.onload = function () {
    const btnCadastrar = document.getElementById('cadastrar')
    btnCadastrar.addEventListener("submit",(e)=>{
        e.preventDefault()
        //verificando os dados a serem cadastraos
        const nome = document.getElementById("nome").value
        const email = document.getElementById("email").value
        const senha = document.getElementById("senha").value
        const aviso = document.getElementById("aviso")
        if(String(nome).length == 0 || String(nome).length <=4 ){
            aviso.style.display = "flex"
            return
        }else  if(String(senha).length <=7 ){
            aviso.style.display = "flex"
            return
        }else{
    
            const dados = {
                nome: nome,
                email : email,
                senha : senha
            }
            const url = "http://locahost:3030"
            async function Cadastrar(url, corpo) {
            
                const flash = document.getElementsByClassName("response")
                [0]
                const progress = document.getElementsByClassName("proces")[0]
                progress.style.display = "flex"
                flash.style.display ="none"

                setTimeout(async()=>{
                    try {
                        const res = await fetch(url,{method:"Post",body:JSON.stringify(corpo)})
                        if(res.ok){
                            let dados = res.json()
                            console.log(corpo)
                            flash.style.display ="flex"
                            
                        }else{
                            
                            flash.textContent = "Erro ao tentar !"
                            flash.style.backgroundColor = " rgba(255, 10, 10, 0.599)"
                            flash.style.display ="flex"
                            throw new Error("Error")
                        }
                    } catch (error) {
                        console.log(error)
                        progress.style.display = "none"
                        flash.textContent = "Verifique a sua Conexão com o Servidor!"
                        flash.style.backgroundColor = " rgba(255, 10, 10, 0.599)"
                        flash.style.display ="flex"
                        
                        
                        
                    }
                },5000) 
            }
            Cadastrar(url , dados)
            
        }
    })
}