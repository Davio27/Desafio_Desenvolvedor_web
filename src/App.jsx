import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Modal from 'react-modal';
import viteLogo from '/vite.svg'
import './App.css'
import imagem1 from './Imagens/img1.jpg';
import imagem2 from './Imagens/img2.png';
import imagem3 from './Imagens/img3.jpg';
import imagem4 from './Imagens/img4.jpg';
import imagem5 from './Imagens/img5.png';
import imagem6 from './Imagens/img6.jpg';
import imagem7 from './Imagens/img7.png';
import imagem8 from './Imagens/img8.png';
import imagem9 from './Imagens/img9.jpg';
import imagem10 from './Imagens/img10.png';
import imagem11 from './Imagens/img11.png';
import imagem12 from './Imagens/img12.jpg';
import imagem13 from './Imagens/img13.jpg';
import imagem14 from './Imagens/img14.png';
import imagem15 from './Imagens/img15.jpg';
import imagem16 from './Imagens/img16.jpg';
import imagem17 from './Imagens/img17.jpg';
import imagem18 from './Imagens/img18.jpg';
import imagem19 from './Imagens/img19.jpg';
import imagem20 from './Imagens/img20.jpg';


function App() {

  const [setCount] = useState(0)
  const [cards, setCards] = useState([]);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setName('');
    setDescription('');
    setImage(null);
  };

  const handleAddCard = () => {
    if (image) {
      const newCard = {
        id: Date.now(),
        image: URL.createObjectURL(image), 
        name: name || `Image ${cards.length + 1}`,
        description: description || 'Descrição padrão',
      };

      setCards([...cards, newCard]);
      closeModal();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };



  const handleRemove = () => {
    const updatedCards = cards.filter((card) => !card.isSelected);
  };

  return (
    <>
      <h2 class="heading">Meus <span>Animes</span></h2>

      <div class="button">
        <button onClick={openModal}>Adicionar</button>
        <button onClick={handleRemove}>Remover</button>
      </div>
            <div class="Competencias-container">

                {/* Card 1 */}
                <div class="card" >
                    <div class="Competencias-box">
                        <div class="card-front">
                            <img src={imagem1} alt="Imagem 1"/>
                        </div>

                        <div class='descricao'>
                        <h3>Ricky</h3>
                        </div>

                        <div class="card-back">
                            <h1>Anime: Ricky e Morty</h1>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                            <img src={imagem2} alt="Imagem 2"/>
                        </div>

                        <div class='descricao'>
                        <h3>Izuko Midoriya</h3>
                        </div>

                        <div class="card-back">
                            <h1>Anime: Boku no Heroes</h1>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem3} alt="Imagem 3"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Kyojuro Rengoku</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Demon Slayer</h1>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                          <img src={imagem4} alt="Imagem 4"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Zenitsu Agatsuma</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Demon Slayer</h1>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem5} alt="Imagem 5"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Nezuko Kamado</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Demon Slayer</h1>
                        </div>
                    </div>
                </div>

                {/* Card 6 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem6} alt="Imagem 6"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>General Igris</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Solo Leveling</h1>
                        </div>
                    </div>
                </div>

                {/* Card 7 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem7} alt="Imagem 7"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Shinobu Kocho</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Demon Slayer</h1>
                        </div>
                    </div>
                </div>

                {/* Card 8 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem8} alt="Imagem 8"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Sung Jin-Woo</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Solo Leveling</h1>
                        </div>
                    </div>
                </div>

                {/* Card 9 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem9} alt="Imagem 9"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Morty</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Ricky e Morty</h1>
                        </div>
                    </div>
                </div>

                {/* Card 10 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem10} alt="Imagem 10"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Sung Jin-Woo</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Solo Leveling</h1>
                        </div>
                    </div>
                </div>

                {/* Card 11 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem11} alt="Imagem 11"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Chae Haen-In</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Solo Leveling</h1>
                        </div>
                    </div>
                </div>

                {/* Card 12 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem12} alt="Imagem 12"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Iuji Itadori</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Jujutsu Kaisen</h1>
                        </div>
                    </div>
                </div>

                {/* Card 13 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem13} alt="Imagem 13"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Nobara Kugisaki</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Jujutsu Kaisen</h1>
                        </div>
                    </div>
                </div>

                {/* Card 14 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem14} alt="Imagem 14"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Satoru Gojo</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Jujutsu Kaisen</h1>
                        </div>
                    </div>
                </div>

                {/* Card 15 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem15} alt="Imagem 15"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Ryomen Sukuna</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Jujutsu Kaisen</h1>
                        </div>
                    </div>
                </div>

                {/* Card 16 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem16} alt="Imagem 16"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Asta</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Black Clover</h1>
                        </div>
                    </div>
                </div>

                {/* Card 17 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem17} alt="Imagem 17"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Satoru Gojo</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Jujutsu Kaisen</h1>
                        </div>
                    </div>
                </div>

                {/* Card 18 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem18} alt="Imagem 18"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Ryomen Sukuna</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Jujutsu Kaisen</h1>
                        </div>
                    </div>
                </div>

                {/* Card 19 */}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem19} alt="Imagem 19"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Nobara Kugisaki</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Jujutsu Kaisen</h1>
                        </div>
                    </div>
                </div>

                {/* Card 20*/}
                <div class="card">
                    <div class="Competencias-box">
                        <div class="card-front">
                        <img src={imagem20} alt="Imagem 20"/>
                        </div>
                        
                        <div class='descricao'>
                        <h3>Megumi Fushiguro</h3>
                        </div>

                        <div class="card-back">
                          <h1>Anime: Jujutsu Kaisen</h1>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Modal */}
      <div class="Janelamodal">
      <div className="Competencias-container">
        {cards.map((card) => (
          <div className={`card ${card.isSelected ? 'selected' : ''}`} key={card.id}>
            <div className="Competencias-box">
              <div className="card-front">
                <img src={card.image} alt={card.name} />
              </div>
              <div className='descricao'>
                <h3>{card.name}</h3>
              </div>
              <div className="card-back">
                <h1>{card.description}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal className="Modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Adicionar Card</h2>
        <input className='inputmodal' type="text" placeholder="Nome do personagem" value={name} onChange={(e) => setName(e.target.value)} />
        <input className='inputmodal' type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input className='inputmodalimg' type="file" accept="image/*" onChange={handleImageChange} />
        <button className='buttonmodal' onClick={handleAddCard}>Adicionar</button>
        <button className='buttonmodal' onClick={closeModal}>Cancelar</button>
      </Modal>
    </div>
    </>
  )
}

export default App