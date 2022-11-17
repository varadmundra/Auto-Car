class Controls {
    constructor(type) {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        // class controls has a constructor which has four attributes forward,left,right,reverse;

        // check whats pressed on keyboard;
        switch (type) {
            case "KEYS":
                this.#addKeyboardListeners();
                break;

            case "DUMMY":
                this.forward = true;
                break;
        }
        // this.#addKeyboardListeners();
    }
    // method inside Controls class
    // # for private method cant acces outside Controls class, shoukdnt access
    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;

                case "ArrowRight":
                    this.right = true;
                    break;

                case "ArrowUp":
                    this.forward = true;
                    break;

                case "ArrowDown":
                    this.reverse = true;
                    break;

            }
            // console.table(this);

        }

        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;

                case "ArrowRight":
                    this.right = false
                    break;

                case "ArrowUp":
                    this.forward = false;
                    break;

                case "ArrowDown":
                    this.reverse = false;
                    break;

            }
            // console.table(this);
        }
    }
}
