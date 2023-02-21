var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MONTSERRADOMAP_1 = new ol.format.GeoJSON();
var features_MONTSERRADOMAP_1 = format_MONTSERRADOMAP_1.readFeatures(json_MONTSERRADOMAP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MONTSERRADOMAP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MONTSERRADOMAP_1.addFeatures(features_MONTSERRADOMAP_1);
var lyr_MONTSERRADOMAP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MONTSERRADOMAP_1, 
                style: style_MONTSERRADOMAP_1,
                interactive: true,
                title: '<img src="styles/legend/MONTSERRADOMAP_1.png" /> MONTSERRADO MAP'
            });
var format_montserradolanduse_2 = new ol.format.GeoJSON();
var features_montserradolanduse_2 = format_montserradolanduse_2.readFeatures(json_montserradolanduse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_montserradolanduse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_montserradolanduse_2.addFeatures(features_montserradolanduse_2);
var lyr_montserradolanduse_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_montserradolanduse_2, 
                style: style_montserradolanduse_2,
                interactive: true,
    title: 'montserrado-land use<br />\
    <img src="styles/legend/montserradolanduse_2_0.png" /> Barclay Training Center<br />\
    <img src="styles/legend/montserradolanduse_2_1.png" /> BTC Parade Deck<br />\
    <img src="styles/legend/montserradolanduse_2_2.png" /> ELWA Hospital<br />\
    <img src="styles/legend/montserradolanduse_2_3.png" /> Firestone Plantation<br />\
    <img src="styles/legend/montserradolanduse_2_4.png" /> Liberia Elecrtricity Corp.<br />\
    <img src="styles/legend/montserradolanduse_2_5.png" /> Liberia Electricity Corporation<br />\
    <img src="styles/legend/montserradolanduse_2_6.png" /> Ministry of Education<br />\
    <img src="styles/legend/montserradolanduse_2_7.png" /> Ministry of Finance<br />\
    <img src="styles/legend/montserradolanduse_2_8.png" /> Monrovia Breweries, Inc.<br />\
    <img src="styles/legend/montserradolanduse_2_9.png" /> Monrovia Port<br />\
    <img src="styles/legend/montserradolanduse_2_10.png" /> Moses Kollie Yard<br />\
    <img src="styles/legend/montserradolanduse_2_11.png" /> open area<br />\
    <img src="styles/legend/montserradolanduse_2_12.png" /> Palm Grove Cemetery<br />\
    <img src="styles/legend/montserradolanduse_2_13.png" /> Potential LZ<br />\
    <img src="styles/legend/montserradolanduse_2_14.png" /> PSI Liberia<br />\
    <img src="styles/legend/montserradolanduse_2_15.png" /> Roland Duo Estate<br />\
    <img src="styles/legend/montserradolanduse_2_16.png" /> Sea Suite Appartment<br />\
    <img src="styles/legend/montserradolanduse_2_17.png" /> Ship dock/ wharf<br />\
    <img src="styles/legend/montserradolanduse_2_18.png" /> Taxis + Other Vehicles<br />\
    <img src="styles/legend/montserradolanduse_2_19.png" /> White Plains Filtration Plant<br />\
    <img src="styles/legend/montserradolanduse_2_20.png" /> Yamah cook shop<br />\
    <img src="styles/legend/montserradolanduse_2_21.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MONTSERRADOMAP_1.setVisible(true);lyr_montserradolanduse_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MONTSERRADOMAP_1,lyr_montserradolanduse_2];
lyr_MONTSERRADOMAP_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_montserradolanduse_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'land use type', 'name': 'facility name', });
lyr_MONTSERRADOMAP_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_montserradolanduse_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_MONTSERRADOMAP_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_montserradolanduse_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_montserradolanduse_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});