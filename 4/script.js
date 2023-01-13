const cards = document.querySelectorAll(".card");
const blocs = document.querySelectorAll(".bloc");
//
const acceuilBloc = document.querySelector("#acceuil");
const blogBloc = document.querySelector("#blog");
const annonceBloc = document.querySelector("#annonce");
const commentaireBloc = document.querySelector("#commentaire");
const previsionBloc = document.querySelector("#prevision");
const profileBloc = document.querySelector("#profile");
const parametreBloc = document.querySelector("#parametre");

//
function hideAllBloc(){
    cards.forEach((item)=>{
        item.classList.remove('active');
    });
    blocs.forEach((item)=>{
        item.classList.add('d-none');
    });
}

//
cards.forEach((item)=>{
    item.addEventListener('click', function(e){
        hideAllBloc();
        item.classList.add('active');
        switch(item.getAttribute('id').substring(4)){
            case 'acceuil':
                acceuilBloc.classList.remove('d-none');
                break;
            case 'blog':
                blogBloc.classList.remove('d-none');
                break;
            case 'annonce':
                annonceBloc.classList.remove('d-none');
                break;
            case 'commentaire':
                commentaireBloc.classList.remove('d-none');
                break;
            case 'prevision':
                previsionBloc.classList.remove('d-none');
                break;
            case 'profile':
                profileBloc.classList.remove('d-none');
                break;
            case 'parametre':
                parametreBloc.classList.remove('d-none');
                break;
            default:
                break;
        }
    });
});