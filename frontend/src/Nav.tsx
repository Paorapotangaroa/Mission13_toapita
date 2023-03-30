import React from 'react'


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div className="container px-4 px-lg-5">

        <a className="navbar-brand" href="{% url 'index' %}">Home</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="{% url 'index' %}">Home</a></li>
                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="{% url 'main-report' %}">Movie Database</a></li>
                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="{% url 'addMeal' %}">Podcasts</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Nav
