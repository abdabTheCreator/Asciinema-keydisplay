const DisplayKeys = (castfile,elId) => {
    var p = document.getElementById('keystroke')
    const hextodec = (hexnum) => parseInt(hexnum, 16);

    AsciinemaPlayer.create({
        url: castfile,
        autoPlay: true,
        preload: true,
        loop: true,
        theme: 'solarized-dark',
        poster: "data:text/plain,I'm regular \x1b[1;32mI'm bold green\x1b[3BI'm 3 lines down"
    }, document.getElementById(elId)).addEventListener('input', ({data}) => {
          //remove the escaped unicode chars \u
          //parse the remaing hex code into a decimal e.g. 001b = 27 
          // find corelating key e.g. 27 = escape
          let sjson = JSON.stringify(data[0])

          if(sjson.includes("u")){
            string = JSON.stringify(data[0]).replace("\\u", "").trim()
            let keyCode = hextodec(JSON.parse(string))
            p.innerText = keyboardMap[keyCode]
          }else{
            p.innerText = sjson
          }

    });
   
}