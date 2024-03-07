import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <h5>About Bitcoin</h5>
      <div className="contents">
        <h6>What is BitCoin ?</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          aliquid. Dignissimos quas et, totam dolor rem fuga dolorum. Ipsum ab
          ex aut mollitia commodi cumque veniam accusamus esse voluptatibus
          doloribus!
        </p>
        <hr />
      </div>
      <div className="contents">
        <h6>Lorem ipsum dolor sit amet.</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem eligendi
          numquam, molestiae asperiores possimus minus sunt odit at, voluptates
          assumenda, est tempora reiciendis reprehenderit ducimus! Asperiores
          alias laborum facere. Magni odio, corporis distinctio rem dolore modi
          <br />
          laudantium similique nulla possimus rerum dignissimos fuga.
          Consectetur, fuga est! Dolorum molestias vero cumque ad praesentium
          sunt! Repellat minima iure perferendis eos dolor voluptatem vitae?
          Vero eos natus at doloremque officiis tenetur dolore placeat culpa
          <br />
          iste veniam. Natus illo accusantium fugiat totam praesentium sequi id
          quam assumenda placeat debitis? Saepe molestias porro, repudiandae
          autem commodi animi incidunt quibusdam necessitatibus voluptas dicta
          hic expedita accusamus!
        </p>
        <hr />
      </div>
      <div className="contents">
        <h4>Already Holding BitCoin ?</h4>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div className="cardz">
                <div className="card_img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H4UBPimiNyv9Fi115xJHJ4wFrZxHiDY83A&usqp=CAU" alt="" />
                </div>
                <div className="card_content">
                  <h6>Calculate your Profits</h6>
                  <button type="button" class="btn btn-light btn-sm">
                    Profit
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
            <div className="cardz" id="cardz_2">
                <div className="card_img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H4UBPimiNyv9Fi115xJHJ4wFrZxHiDY83A&usqp=CAU" alt="" />
                </div>
                <div className="card_content">
                  <h6>Calculate your Profits</h6>
                  <button type="button" class="btn btn-light btn-sm">
                    Profit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="contents">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          aliquid. Dignissimos quas et, totam dolor rem fuga dolorum. Ipsum ab
          ex aut mollitia commodi cumque veniam accusamus esse voluptatibus
          doloribus!
        </p>
      </div>
    </div>
  );
}

export default About;
