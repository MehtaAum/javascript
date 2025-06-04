  const quotes = [
    "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential",
    "Motivation is crap. Motivation comes and goes. When you're driven, whatever is in front of you will get destroyed",
    "You have to build calluses on your brain just like how you build calluses on your hands. Callus your mind through pain and suffering",
    "Most people who are criticising and judging haven’t even tried what you failed at",
    "You will never learn from people if you always tap dance around the truth",
    "Be more than motivated, be more than driven, become literally obsessed to the point where people think you’re f***ing nuts",
    "It’s so easy to be great nowadays, because everyone else is weak",
    "Tell yourself the truth! That you've wasted enough time, and that you have other dreams that will take courage to realize",
    "Suffering is a test. That's all it is. Suffering is the true test of life",
    "The most important conversations you’ll ever have are the ones you’ll have with yourself",
    "You don’t know me. You think you f***ing do, but you don’t",
    "Everybody wants to be a beast, until it’s time to do what beasts do",
    "If you’re not willing to go too far, you’ll never go far enough in life",
    "Don’t stop when you’re tired. Stop when you’re done",
    "Stay hard!",
    "No one is going to come help you. No one's coming to save you",
    "You have to master your mind before you can master your body",
    "Get comfortable being uncomfortable",
    "You’re not going to find greatness by looking for shortcuts",
    "Every day is a new day to get after it",
    "Don’t just talk about it. Be about it",
    "The mind is a medieval motherf***er. It wants to survive. It doesn’t want to thrive",
    "If you can get through doing things that you hate to do, on the other side is greatness",
    "Your biggest enemy is the voice in your head telling you to quit",
    "You are stopping you. You are giving up instead of getting hard",
    "The path to success will leave you callused, bruised, and very tired. It will also leave you empowered",
    "Be uncommon amongst uncommon people",
    "I don't stop when I'm tired. I stop when I'm done",
    "If you want to be pushed to your limits, you have to train past them",
    "The pain that you are willing to endure is measured by how bad you want it",
    "When you think you’re done, you’re only at 40% of your total potential",
    "Greatness pulls mediocrity into the mud. Get out of the mud"
  ];

  let button = document.querySelector(".button")
  let text = document.querySelector(".text-show")


  button.addEventListener("click", function(){
    let add = quotes[Math.floor(Math.random() * quotes.length)]
    text.innerText = add
    
  })