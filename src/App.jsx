import './App.css'

function App() {
  return (
    <div className="container">
      <nav>
        <h2>MyPortfolio</h2>
        <div>
          <a href="#home">Басты бет</a>
          <a href="#about">Мен туралы</a>
          <a href="#contact">Байланыс</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="welcome">WELCOME TO MY WEBSITE</p>
        <h1>Сәлем! Менің сайтымa қош келдіңіз!</h1>
        <p>Мен React арқылы заманауи веб-сайт жасауды үйреніп жүрмін.</p>
        <a className="btn" href="#about">Толығырақ</a>
      </section>

      <section className="about" id="about">
        <h2>Мен туралы</h2>
        <p>
          Мен веб-бағдарламалауға қызығамын.
          React, JavaScript, HTML және CSS технологияларын үйреніп жүрмін.
        </p>
      </section>

      <section className="contact" id="contact">
        <h2>Байланыс</h2>
        <p>Email: nurlankyzy@gmail.com</p>
        <p>Instagram: @nurlanovvna</p>
      </section>

      <footer>
        © 2026 MyPortfolio. Барлық құқықтар қорғалған.
      </footer>
    </div>
  )
}

export default App