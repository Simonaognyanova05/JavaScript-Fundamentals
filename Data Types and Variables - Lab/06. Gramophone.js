function getSong(band, album, song){
    let prodaljitelnost = (album.length * band.length) * song.length / 2
    let times = prodaljitelnost / 2.5
    console.log(`The plate was rotated ${Math.ceil(times)} times.`)
}