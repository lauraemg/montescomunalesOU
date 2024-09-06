var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_montesOU4326_1 = new ol.format.GeoJSON();
var features_montesOU4326_1 = format_montesOU4326_1.readFeatures(json_montesOU4326_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_montesOU4326_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_montesOU4326_1.addFeatures(features_montesOU4326_1);
var lyr_montesOU4326_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_montesOU4326_1, 
                style: style_montesOU4326_1,
                popuplayertitle: "montesOU4326",
                interactive: true,
                title: '<img src="styles/legend/montesOU4326_1.png" /> montesOU4326'
            });
var lyr_Catastro_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_2, 0]);

lyr_EsriWorldImagery_0.setVisible(true);lyr_montesOU4326_1.setVisible(true);lyr_Catastro_2.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_montesOU4326_1,lyr_Catastro_2];
lyr_montesOU4326_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'IDMONTE': 'IDMONTE', 'NOMEMONTE': 'NOMEMONTE', 'CODIGOPROV': 'CODIGOPROV', 'PROVINCIA': 'PROVINCIA', 'CODIGOINEC': 'CODIGOINEC', 'CONCELLO': 'CONCELLO', 'LUGAR': 'LUGAR', 'TIPO': 'TIPO', 'XESTION': 'XESTION', 'EXPEDIENTE': 'EXPEDIENTE', 'CLASIFICAD': 'CLASIFICAD', 'DATACLASIF': 'DATACLASIF', 'SUPERFICIE': 'SUPERFICIE', 'IDPERTENZA': 'IDPERTENZA', 'NOMEPERTEN': 'NOMEPERTEN', 'IDDISTRITO': 'IDDISTRITO', 'NOMEDISTRI': 'NOMEDISTRI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_montesOU4326_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'IDMONTE': '', 'NOMEMONTE': '', 'CODIGOPROV': '', 'PROVINCIA': '', 'CODIGOINEC': '', 'CONCELLO': '', 'LUGAR': '', 'TIPO': '', 'XESTION': '', 'EXPEDIENTE': '', 'CLASIFICAD': '', 'DATACLASIF': '', 'SUPERFICIE': '', 'IDPERTENZA': '', 'NOMEPERTEN': '', 'IDDISTRITO': '', 'NOMEDISTRI': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_montesOU4326_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'IDMONTE': 'no label', 'NOMEMONTE': 'no label', 'CODIGOPROV': 'no label', 'PROVINCIA': 'no label', 'CODIGOINEC': 'no label', 'CONCELLO': 'no label', 'LUGAR': 'no label', 'TIPO': 'no label', 'XESTION': 'no label', 'EXPEDIENTE': 'no label', 'CLASIFICAD': 'no label', 'DATACLASIF': 'no label', 'SUPERFICIE': 'no label', 'IDPERTENZA': 'no label', 'NOMEPERTEN': 'no label', 'IDDISTRITO': 'no label', 'NOMEDISTRI': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_montesOU4326_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});