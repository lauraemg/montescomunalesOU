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
var format_Montes_Comunales_OU_1 = new ol.format.GeoJSON();
var features_Montes_Comunales_OU_1 = format_Montes_Comunales_OU_1.readFeatures(json_Montes_Comunales_OU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montes_Comunales_OU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montes_Comunales_OU_1.addFeatures(features_Montes_Comunales_OU_1);
var lyr_Montes_Comunales_OU_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montes_Comunales_OU_1, 
                style: style_Montes_Comunales_OU_1,
                popuplayertitle: "Montes_Comunales_OU",
                interactive: true,
                title: '<img src="styles/legend/Montes_Comunales_OU_1.png" /> Montes_Comunales_OU'
            });
var format_Montes_Comunales_Castro_Caldelas_2 = new ol.format.GeoJSON();
var features_Montes_Comunales_Castro_Caldelas_2 = format_Montes_Comunales_Castro_Caldelas_2.readFeatures(json_Montes_Comunales_Castro_Caldelas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montes_Comunales_Castro_Caldelas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montes_Comunales_Castro_Caldelas_2.addFeatures(features_Montes_Comunales_Castro_Caldelas_2);
var lyr_Montes_Comunales_Castro_Caldelas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montes_Comunales_Castro_Caldelas_2, 
                style: style_Montes_Comunales_Castro_Caldelas_2,
                popuplayertitle: "Montes_Comunales_Castro_Caldelas",
                interactive: true,
                title: '<img src="styles/legend/Montes_Comunales_Castro_Caldelas_2.png" /> Montes_Comunales_Castro_Caldelas'
            });
var lyr_Catastro_3 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Catastro_3, 0]);

lyr_EsriWorldImagery_0.setVisible(true);lyr_Montes_Comunales_OU_1.setVisible(true);lyr_Montes_Comunales_Castro_Caldelas_2.setVisible(true);lyr_Catastro_3.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_Montes_Comunales_OU_1,lyr_Montes_Comunales_Castro_Caldelas_2,lyr_Catastro_3];
lyr_Montes_Comunales_OU_1.set('fieldAliases', {'NOMEMONTE': 'NOMEMONTE', 'CONCELLO': 'CONCELLO', 'XESTION': 'XESTION', 'NOMEPERTEN': 'NOMEPERTEN', });
lyr_Montes_Comunales_Castro_Caldelas_2.set('fieldAliases', {'NOMEMONTE': 'NOMEMONTE', 'CONCELLO': 'CONCELLO', 'XESTION': 'XESTION', 'NOMEPERTEN': 'NOMEPERTEN', });
lyr_Montes_Comunales_OU_1.set('fieldImages', {'NOMEMONTE': 'TextEdit', 'CONCELLO': 'TextEdit', 'XESTION': 'TextEdit', 'NOMEPERTEN': 'TextEdit', });
lyr_Montes_Comunales_Castro_Caldelas_2.set('fieldImages', {'NOMEMONTE': '', 'CONCELLO': '', 'XESTION': '', 'NOMEPERTEN': '', });
lyr_Montes_Comunales_OU_1.set('fieldLabels', {'NOMEMONTE': 'no label', 'CONCELLO': 'no label', 'XESTION': 'no label', 'NOMEPERTEN': 'hidden field', });
lyr_Montes_Comunales_Castro_Caldelas_2.set('fieldLabels', {'NOMEMONTE': 'no label', 'CONCELLO': 'no label', 'XESTION': 'no label', 'NOMEPERTEN': 'no label', });
lyr_Montes_Comunales_Castro_Caldelas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});