import { useState } from 'react';
import axios from 'axios';

const CreatePersonnel = () => {

    const [nomPerso, setNom] = useState('');
    const [prenomPerso, setPrenom] = useState('');
    const [emailPerso, setEmail] = useState('');
    const [sexePerso, setSexe] = useState('');
    const [telPerso, setTel] = useState('');
    const [diplomePerso, setDiplome] = useState('');
    const [imagePerso, setImage] = useState(null);
    
    const [error, setError] = useState(false)
    const [succes, setsucces] = useState(false)
    const [users, setsusers] = useState([])
    const [refresh, setrefresh] = useState(false)
  
    const handleSubmit=async(e) => {
      e.preventDefault();
      if (nomPerso==='' || prenom==='' || email==='' ){   
        setError(true)
      }else{
        setError(false)
      }
  
      try {
        const response = await axios.post('http://localhost:3001/api/user/create', // api/user du serveur est mit ici pour creer le lein entre l'appli et le serveur
        {nom:nom,email:email,prenom:prenom}
        );
        setsucces(response.data);
        setnom('')  
        setprenom('')       // quand les donnees partent, les champs redeviennent vides
        setemail('')
        setTimeout(() => {
          setsucces(false)
        }, 2000);
        setrefresh(!refresh)
      } catch (error) {
        console.error(error);
      }
      
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    
    //     const newPersonnel = new FormData();
    //     newPersonnel.append('nomPerso', nomPerso);
    //     newPersonnel.append('prenomPerso', prenomPerso);
    //     newPersonnel.append('emailPerso', emailPerso);
    //     newPersonnel.append('sexePerso', sexePerso);
    //     newPersonnel.append('telPerso', telPerso);
    //     newPersonnel.append('diplomePerso', diplomePerso);
    //     newPersonnel.append('imagePerso', imagePerso);
    
    //     try {
    //       axios.post('http://localhost:3306/api/personnel', newPersonnel, {
    //         headers: {
    //           'Content-Type': 'multipart/newPersonnel',
    //         },
    //       });
    //       // Succès de la création du personnel
    //       // console.log('Personnel créé avec succès');
    //     } catch (error) {
    //       // Gestion des erreurs
          
    //       console.error(error);
    //     }
    // }
    return (
        <main className='container mt-3'>
            <div className="row d-flex justify-content-center">
              <div className="col-md-2">

              </div>
              <div className="col-md-6">
                <h2 className='text-center fw-5 fs-3 mb-3'>Créer Un Personnel</h2>
                {error && <div className='alert alert-danger'>Tous les champs sont obligatoire</div>}
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className='mb-3'>
                <label className="form-label">Nom :</label>
                <input type="text" className='form-control' value={nomPerso} onChange={(e) => setNom(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label className="form-label">Prénom :</label>
                <input type="text" className='form-control' value={prenomPerso} onChange={(e) => setPrenom(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label className="form-label">Email :</label>
                <input type="email" className='form-control' value={emailPerso} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label className="form-label">Sexe :</label>
                <input type="text" className='form-control' value={sexePerso} onChange={(e) => setSexe(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label className="form-label">Téléphone :</label>
                <input type="tel" className='form-control' value={telPerso} onChange={(e) => setTel(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label className="form-label">Diplôme :</label>
                <input type="text" className='form-control' value={diplomePerso} onChange={(e) => setDiplome(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label className="form-label">Photo :</label>
                <input type="file" className='form-control' onChange={(e) => setImage(e.target.files[1])} />
              </div>
              <center><button type="submit" className='btn btn-primary w-50'>Créer</button></center>
            </form>
              </div>
            </div>

            
        </main>
    );
};

export default CreatePersonnel;
