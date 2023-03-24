document.querySelector("#navbar").innerHTML = `
<header id="navbar"> 
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="./index.html">Menu</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/./index.html">Voltar para o menu com todas as atividades</a>    
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="./grade.html">Grade horária</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Disciplinas   
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="tecnologias.html">Tecnologias para programação web</a>
                      <a class="dropdown-item" href="auditoria.html">Auditoria e segurança de sistemas</a>
                      <a class="dropdown-item" href="software.html">Software livre</a>
                      <a class="dropdown-item" href="redes.html">Redes de computadores II</a>
                      <a class="dropdown-item" href="governanca.html">Governaça e tecnologia da informação</a>
                      <a class="dropdown-item" href="qualidade.html">Qualidade e desenvolvimento de software</a>
                    </div>
                </li>
              </ul>
            </div>
          </nav>
    </header>

`
