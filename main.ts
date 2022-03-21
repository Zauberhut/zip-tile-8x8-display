let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Visible)
tileDisplay.clear()
tileDisplay.setBrightness(100)
tileDisplay.rotate(2)
basic.forever(function () {
    tileDisplay.scrollText(
    "Hallo liebe Leute hötet euch ganz FESTG",
    Kitronik_Zip_Tile.TextDirection.Up,
    1000,
    Kitronik_Zip_Tile.TextStyle.Background,
    Kitronik_Zip_Tile.colors(ZipLedColors.Indigo),
    Kitronik_Zip_Tile.colors(ZipLedColors.Red)
    )
    basic.pause(5000)
    tileDisplay.showRainbow(1, 360)
    basic.pause(5000)
})
