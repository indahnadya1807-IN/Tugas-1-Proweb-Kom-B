function cetakhasil(namagame, user, komputer, status){
    alert(
        "Mode :" + namagame +
        "\nPilihan anda :" + user +
        "\nPilihan komputer :" + komputer +
        "\nHasil :" + status
    );
}

function suitbatuguntingkertas(){
    const pilihan = ["batu", "gunting", "kertas"];

    let inputUser = prompt("masukkan pilihan (batu / gunting / kertas)")

    if (inputUser === null || inputUser.trim () === ""){
        alert ("Permainan dibatalkan!");
        return;
    }

    let user = inputUser.toLocaleLowerCase().trim();

    if (!pilihan.includes(user)){
        alert("pilihan tidak valid! pilih batu, gunting, kertas");
        return;
    }

     let komputer = pilihan[Math.floor(Math.random() * 3)];
     let status ="" ;

    if (user === komputer) {
        status = "SERI!!";
    } else if (
        (user === "batu" && komputer === "gunting") ||
        (user === "gunting" && komputer === "kertas") ||
        (user === "kertas" && komputer === "batu")
    ){
        status = "ANDA MENANG!!";
    }else {
        status = "ANDA KALAH!!";
    }

    cetakhasil ("batu, gunting, kertas", user, komputer, status);
}

function suitgajahorangsemut(){
    const pilihan = ["gajah", "orang", "semut"];

    let inputuser = prompt ("masukkan pilihan ( gajah / orang / semut)" )
    
    if (inputuser === null || inputuser.trim() ==="" ){
        alert ("permainan dibatalkan!");
        return;
    }

    let user = inputuser.toLocaleLowerCase().trim();

    if (!pilihan.includes(user)){
        alert ("pilihan tidak valid! pilih gajah, orang, semut");
        return;
    }

    let komputer = pilihan[Math.floor(Math.random() * 3)];
    let status ="";

    if (user === komputer ){
        status = "SERI!!"
    } else if (
        (user === "gajah" && komputer === "orang")||
        (user === "orang" && komputer === "semut")||
        (user === "semut" && komputer === "gajah")
    ){
        status = "ANDA MENANG!!"
    }else {
        status = "ANDA KALAH!!"
    }

    cetakhasil ("gajah, orang, semut", user, komputer, status);
}

function suitjarijempoltelunjukkelingking(){
    const pilihan = ["jempol", "telunjuk", "kelingking"];

    let inputuser = prompt ("masukkan pilihan (jempol / telunjuk / kelingking)")

    if (inputuser === null || inputuser.trim() ==="" ){
    alert ("permainan dibatalkan");
    return;
    }

    let user = inputuser.toLocaleLowerCase().trim();

    if (!pilihan.includes(user)){
        alert("pilihan tidak valid! pilih jempol, telunjuk, kelingking");
        return;
    }

    let komputer = pilihan[Math.floor(Math.random() * 3)];
    let status ="";

    if (user === komputer){
        status = "SERI!!"
    }else if (
        (user === "jempol" && komputer === "telunjuk") ||
        (user === "telunjuk" && komputer === "kelingking") ||
        (user === "kelingking" && komputer === "jempol")
    ){
        status = "ANDA MENANG!!"
    }else {
        status = "ANDA KALAH!!"
    }

    cetakhasil ("jempol, telunjuk, kelingking", user, komputer, status);
}