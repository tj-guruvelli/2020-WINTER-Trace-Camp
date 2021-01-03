


const Game = (props) => {

  return (
    <>
      <div className="text-2xl font-bold mb-8">Can remember where the cards are?</div>
      <div class="row">
        <div class="card yellow color-hidden"
          data-color="yellow"
          onclick="onCardClicked(event)"></div>
        <div class=" card pink color-hidden"
          data-color="pink"
          onclick= "onCardClicked(event)"></div>
        <div class=" card purple color-hidden"
          data-color="purple"
          onclick= "onCardClicked(event)"></div>
        <div class=" card purple color-hidden"
          data-color="purple"
          onclick= "onCardClicked(event)"></div>
      </div>
      <div class="row">
        <div class=" card red color-hidden"
          data-color="red"
          onclick= "onCardClicked(event)"></div>
        <div class=" card blue color-hidden"
          data-color="blue"
          onclick= "onCardClicked(event)"></div>
        <div class=" card green color-hidden"
          data-color="green"
          onclick= "onCardClicked(event)"></div>
        <div class=" card yellow color-hidden"
          data-color="yellow"
          onclick= "onCardClicked(event)"></div>
      </div>
      <div class="row">
        <div class=" card pink color-hidden"
          data-color="pink"
          onclick="onCardClicked(event)"></div>
        <div class=" card green color-hidden"
          data-color="green"
          onclick= "onCardClicked(event)"></div>
        <div class=" card blue color-hidden"
          data-color="blue"
          onclick= "onCardClicked(event)"></div>
        <div class=" card cyan color-hidden"
          data-color="cyan"
          onclick= "onCardClicked(event)"></div>
      </div>
      <div class="row">
        <div class=" card red color-hidden"
        data-color="red"
        onclick= "onCardClicked(event)"></div>
        <div class=" card cyan color-hidden"
        data-color="cyan"
        onclick= "onCardClicked(event)"></div>
        <div class=" card orange color-hidden"
        data-color="orange"
        onclick= "onCardClicked(event)"></div>
        <div class=" card orange color-hidden"
        data-color="orange"
        onclick= "onCardClicked(event)"></div>
      </div>
      
      
    </>
  );
};

export default Game;