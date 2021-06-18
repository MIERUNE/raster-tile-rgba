import { RasterTileRgba } from '../src/rastertilergba';

describe('PNG tilesets', (): void => {
    const rtRgba = new RasterTileRgba(
        'https://disaportal.gsi.go.jp/data/raster/01_flood_l2_shinsuishin/{z}/{x}/{y}.png',
    );

    test('139.363375, 35.354857 ', async () => {
        const rgba = await rtRgba.getRgba([139.363375, 35.354857], 17);
        if (!rgba) {
            console.log(`can't get a tile`);
            return;
        }
        expect(rgba[0]).toEqual(255);
        expect(rgba[1]).toEqual(216);
        expect(rgba[2]).toEqual(192);
    });
});
