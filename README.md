# raster-tile-rgba

![GitHub](https://img.shields.io/github/license/MIERUNE/raster-tile-rgba)

This module is to get a pixel value from RasterTile by longitude and latitude.

## Install

```
npm install git+https://github.com/MIERUNE/raster-tile-rgba.git
```

## Usage

This module can be used for PNG or WEBP rastertile.

```ts
import RasterTileRgba from 'raster-tile-rgba';

const rtRgba = new RasterTileRgba(
    'https://disaportal.gsi.go.jp/data/raster/01_flood_l2_shinsuishin/{z}/{x}/{y}.png',
);
const rgba = await rtRgba.getRgba([139.363375, 35.354857], 17);
console.log(rgba); // [255, 216, 192, 255]
```
