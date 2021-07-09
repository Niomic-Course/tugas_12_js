function buah() {
    let dataBuah = ['pisang', 'jeruk', 'apel', 'mangga'];
    console.log(dataBuah);

    dataBuah.pop();
    console.log(dataBuah);

    dataBuah.shift();
    return dataBuah;
}

console.log(buah());