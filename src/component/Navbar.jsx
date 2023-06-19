import '../../public/css/Navbar.css'
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsUmbrellaFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <main>
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 sidebar bg-body-secondary">
                    <li className="nav-item py-3">
                        <a to="/admin">VOIR L'ESPACE ADMIN</a>
                    </li>
                    <ul className="nav flex-column">
                        <li className="nav-item py-3">
                            <NavLink className="nav-link active" aria-current="page" to="/dashboard"><AiFillAppstore size={28} className="me-2"/>Dashboard</NavLink>
                        </li>
                        <li className="nav-item py-3">
                            <NavLink className="nav-link" to="/recruitment"><AiOutlineUserAdd size={28} className="me-2"/>Recruitement</NavLink>
                        </li>
                        <li className="nav-item py-3">
                            <NavLink className="nav-link" to="/workRecords"><AiOutlineProfile size={28} className="me-2"/>Fiche de travail</NavLink>
                        </li>
                        <li className="nav-item py-3">
                            <NavLink className="nav-link" to="/performance"><IoBagRemoveSharp size={28} className="me-2"/>Performances</NavLink>
                        </li>
                        <li className="nav-item py-3">
                            <NavLink className="nav-link" to="/payments"><FaMoneyBillAlt size={28} className="me-2"/>Paiement</NavLink>
                        </li>
                        <li className="nav-item py-3">
                            <NavLink className="nav-link" to="/leaveManager"><BsUmbrellaFill size={28} className="me-2"/>Congés</NavLink>
                        </li>
                        <li className="nav-item py-3">
                            <NavLink className="nav-link" to="/careerManager"><GiProgression size={28} className="me-2"/>Carrière</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <p className="fs-5 fw-5 mx-5">HTTC ERP un système de gestion scolaire</p>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <div className="search-input-container">
                                    <NavLink className="nav-link"><FiSearch className="search-icon" size={28}/></NavLink>
                                    <input type="text" className="search-input form-control" placeholder="Rechercher" />
                                </div>
                                <li className="px-3">
                                <button className="btn btn-outline-secondary" type="submit"><AiOutlineUser  size={28} className="me-2"/>Admin</button>
                                </li>
                            </ul>
                            
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            

            {console.log('salut')}
        </main>
    );
};

export default Navbar;