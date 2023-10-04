let array = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg"];
        let index = 0;
        let arr = document.querySelector("#image");
        let prev = function () {
          if (index >= array.length - 1)
            index=-1;
                index++;
            click();
        }
   left.addEventListener('click', prev);
        let next = function () {
            if (index <= 0)
                index = array.length;
            index--;
            click();
        }
     right.addEventListener('click', next);

       arr.setAttribute('src', 'images/' + array[0]);    
        function click() {
            arr.setAttribute('src', 'images/' + array[index]);
        }
