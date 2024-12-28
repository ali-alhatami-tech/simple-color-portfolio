
var changedColor = false;
document
    .getElementById("colorChangeButton")
    .addEventListener("click", function () {
        if (changedColor === false) {
            document.documentElement.style.setProperty(
                "--background-color",
                "#333333"
            ); // New background color
            document.documentElement.style.setProperty(
                "--background-shapes-color",
                "rgb(0, 114, 128)"
            ); // New shapes color
            document.documentElement.style.setProperty(
                "--hover-color",
                "rgb(1, 107, 120)"
            ); // New hover color
            document.documentElement.style.setProperty(
                "--header-color",
                "rgb(0, 71 ,80)"
            ); // New header color
            document.documentElement.style.setProperty(
                "--button-color",
                "rgb(0, 114, 128)"
            ); // New button color
            document.documentElement.style.setProperty(
                "--text-default-color",
                "white"
            ); // New text color
            changedColor = true;
        } else {
            document.documentElement.style.setProperty(
                "--background-color",
                "#333333"
            ); // New background color
            document.documentElement.style.setProperty(
                "--background-shapes-color",
                "rgb(0, 128, 94)"
            ); // New shapes color
            document.documentElement.style.setProperty(
                "--hover-color",
                "rgb(0, 148, 109)"
            ); // New hover color
            document.documentElement.style.setProperty(
                "--header-color",
                "rgb(0, 74, 54)"
            ); // New header color
            document.documentElement.style.setProperty(
                "--button-color",
                "rgb(0, 128, 94)"
            ); // New button color
            document.documentElement.style.setProperty(
                "--text-default-color",
                "white"
            ); // New text color
            changedColor = false;
        }
    });
