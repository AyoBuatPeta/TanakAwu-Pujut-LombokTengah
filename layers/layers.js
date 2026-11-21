var wms_layers = [];


        var lyr_WorldImagery_0 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSateliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satelite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_3 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: 'Sungai',
                interactive: false,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });
var format_JalanPermukiman_5 = new ol.format.GeoJSON();
var features_JalanPermukiman_5 = format_JalanPermukiman_5.readFeatures(json_JalanPermukiman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPermukiman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPermukiman_5.addFeatures(features_JalanPermukiman_5);
var lyr_JalanPermukiman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPermukiman_5, 
                style: style_JalanPermukiman_5,
                popuplayertitle: 'Jalan Permukiman',
                interactive: false,
                title: '<img src="styles/legend/JalanPermukiman_5.png" /> Jalan Permukiman'
            });
var format_JalanLokalTersier_6 = new ol.format.GeoJSON();
var features_JalanLokalTersier_6 = format_JalanLokalTersier_6.readFeatures(json_JalanLokalTersier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokalTersier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokalTersier_6.addFeatures(features_JalanLokalTersier_6);
var lyr_JalanLokalTersier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokalTersier_6, 
                style: style_JalanLokalTersier_6,
                popuplayertitle: 'Jalan Lokal (Tersier)',
                interactive: false,
                title: '<img src="styles/legend/JalanLokalTersier_6.png" /> Jalan Lokal (Tersier)'
            });
var format_JalanNasionalArteriPrimer_7 = new ol.format.GeoJSON();
var features_JalanNasionalArteriPrimer_7 = format_JalanNasionalArteriPrimer_7.readFeatures(json_JalanNasionalArteriPrimer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanNasionalArteriPrimer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanNasionalArteriPrimer_7.addFeatures(features_JalanNasionalArteriPrimer_7);
var lyr_JalanNasionalArteriPrimer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanNasionalArteriPrimer_7, 
                style: style_JalanNasionalArteriPrimer_7,
                popuplayertitle: 'Jalan Nasional (Arteri Primer)',
                interactive: false,
                title: '<img src="styles/legend/JalanNasionalArteriPrimer_7.png" /> Jalan Nasional (Arteri Primer)'
            });
var format_AreaLuarDesa_8 = new ol.format.GeoJSON();
var features_AreaLuarDesa_8 = format_AreaLuarDesa_8.readFeatures(json_AreaLuarDesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaLuarDesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaLuarDesa_8.addFeatures(features_AreaLuarDesa_8);
var lyr_AreaLuarDesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaLuarDesa_8, 
                style: style_AreaLuarDesa_8,
                popuplayertitle: 'Area Luar Desa',
                interactive: false,
                title: '<img src="styles/legend/AreaLuarDesa_8.png" /> Area Luar Desa'
            });
var format_BatasDesa_9 = new ol.format.GeoJSON();
var features_BatasDesa_9 = format_BatasDesa_9.readFeatures(json_BatasDesa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_9.addFeatures(features_BatasDesa_9);
var lyr_BatasDesa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_9, 
                style: style_BatasDesa_9,
                popuplayertitle: 'Batas Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_9.png" /> Batas Desa'
            });
var format_BatasKecamatan_10 = new ol.format.GeoJSON();
var features_BatasKecamatan_10 = format_BatasKecamatan_10.readFeatures(json_BatasKecamatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_10.addFeatures(features_BatasKecamatan_10);
var lyr_BatasKecamatan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_10, 
                style: style_BatasKecamatan_10,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_10.png" /> Batas Kecamatan'
            });
var format_TitikPentingDesa_11 = new ol.format.GeoJSON();
var features_TitikPentingDesa_11 = format_TitikPentingDesa_11.readFeatures(json_TitikPentingDesa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPentingDesa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPentingDesa_11.addFeatures(features_TitikPentingDesa_11);
var lyr_TitikPentingDesa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPentingDesa_11, 
                style: style_TitikPentingDesa_11,
                popuplayertitle: 'Titik Penting Desa',
                interactive: true,
    title: 'Titik Penting Desa<br />\
    <img src="styles/legend/TitikPentingDesa_11_0.png" /> Bank Sampah Sejahterah<br />\
    <img src="styles/legend/TitikPentingDesa_11_1.png" /> Bundaran Bil<br />\
    <img src="styles/legend/TitikPentingDesa_11_2.png" /> Dayen Kokoh Jambik 1<br />\
    <img src="styles/legend/TitikPentingDesa_11_3.png" /> Graha Raden Binsih<br />\
    <img src="styles/legend/TitikPentingDesa_11_4.png" /> Kantor Desa Tanak Awu<br />\
    <img src="styles/legend/TitikPentingDesa_11_5.png" /> Lombok International Airport<br />\
    <img src="styles/legend/TitikPentingDesa_11_6.png" /> Masjid Kharul Ittihad<br />\
    <img src="styles/legend/TitikPentingDesa_11_7.png" /> Poskesdes Tanak Awu<br />\
    <img src="styles/legend/TitikPentingDesa_11_8.png" /> SDN 1 Tanak Awu<br />\
    <img src="styles/legend/TitikPentingDesa_11_9.png" /> SDN 2 Tanak Awu<br />\
    <img src="styles/legend/TitikPentingDesa_11_10.png" /> SDN Selawang<br />\
    <img src="styles/legend/TitikPentingDesa_11_11.png" /> Tanak Awu, Pujut, Central Lombok Regency<br />' });
var group_INSET = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'INSET'});
var group_BatasWilayahAdministrasi = new ol.layer.Group({
                                layers: [lyr_AreaLuarDesa_8,lyr_BatasDesa_9,lyr_BatasKecamatan_10,],
                                fold: 'open',
                                title: 'Batas Wilayah Administrasi'});
var group_JaringanJalanSungai = new ol.layer.Group({
                                layers: [lyr_Sungai_4,lyr_JalanPermukiman_5,lyr_JalanLokalTersier_6,lyr_JalanNasionalArteriPrimer_7,],
                                fold: 'open',
                                title: 'Jaringan Jalan & Sungai'});

lyr_WorldImagery_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_GoogleSateliteHybrid_2.setVisible(true);lyr_GoogleTerrainHybrid_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_JalanPermukiman_5.setVisible(true);lyr_JalanLokalTersier_6.setVisible(true);lyr_JalanNasionalArteriPrimer_7.setVisible(true);lyr_AreaLuarDesa_8.setVisible(true);lyr_BatasDesa_9.setVisible(true);lyr_BatasKecamatan_10.setVisible(true);lyr_TitikPentingDesa_11.setVisible(true);
var layersList = [lyr_WorldImagery_0,lyr_GoogleSatelite_1,lyr_GoogleSateliteHybrid_2,lyr_GoogleTerrainHybrid_3,group_JaringanJalanSungai,group_BatasWilayahAdministrasi,lyr_TitikPentingDesa_11];
lyr_Sungai_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'content': 'content', 'incline': 'incline', 'level': 'level', 'footway': 'footway', 'location': 'location', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'plant:source': 'plant:source', 'plant:output:electricity': 'plant:output:electricity', 'plant:method': 'plant:method', 'old_ref': 'old_ref', 'old_name': 'old_name', 'int_ref': 'int_ref', 'bicycle': 'bicycle', 'covered': 'covered', 'voltage': 'voltage', 'power': 'power', 'import': 'import', 'width': 'width', 'length': 'length', 'barrier': 'barrier', 'layer': 'layer', 'bridge': 'bridge', 'tower:type': 'tower:type', 'man_made': 'man_made', 'check_date:surface': 'check_date:surface', 'alt_name': 'alt_name', 'ref': 'ref', 'area:aeroway': 'area:aeroway', 'aeroway': 'aeroway', 'access': 'access', 'service': 'service', 'int_name': 'int_name', 'waterway': 'waterway', 'foot': 'foot', 'lanes': 'lanes', 'junction': 'junction', 'lane_markings': 'lane_markings', 'tunnel': 'tunnel', 'surface': 'surface', 'smoothness': 'smoothness', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'name': 'name', 'highway': 'highway', });
lyr_JalanPermukiman_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'content': 'content', 'incline': 'incline', 'level': 'level', 'footway': 'footway', 'location': 'location', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'plant:source': 'plant:source', 'plant:output:electricity': 'plant:output:electricity', 'plant:method': 'plant:method', 'old_ref': 'old_ref', 'old_name': 'old_name', 'int_ref': 'int_ref', 'bicycle': 'bicycle', 'covered': 'covered', 'voltage': 'voltage', 'power': 'power', 'import': 'import', 'width': 'width', 'length': 'length', 'barrier': 'barrier', 'layer': 'layer', 'bridge': 'bridge', 'tower:type': 'tower:type', 'man_made': 'man_made', 'check_date:surface': 'check_date:surface', 'alt_name': 'alt_name', 'ref': 'ref', 'area:aeroway': 'area:aeroway', 'aeroway': 'aeroway', 'access': 'access', 'service': 'service', 'int_name': 'int_name', 'waterway': 'waterway', 'foot': 'foot', 'lanes': 'lanes', 'junction': 'junction', 'lane_markings': 'lane_markings', 'tunnel': 'tunnel', 'surface': 'surface', 'smoothness': 'smoothness', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'name': 'name', 'highway': 'highway', });
lyr_JalanLokalTersier_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'content': 'content', 'incline': 'incline', 'level': 'level', 'footway': 'footway', 'location': 'location', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'plant:source': 'plant:source', 'plant:output:electricity': 'plant:output:electricity', 'plant:method': 'plant:method', 'old_ref': 'old_ref', 'old_name': 'old_name', 'int_ref': 'int_ref', 'bicycle': 'bicycle', 'covered': 'covered', 'voltage': 'voltage', 'power': 'power', 'import': 'import', 'width': 'width', 'length': 'length', 'barrier': 'barrier', 'layer': 'layer', 'bridge': 'bridge', 'tower:type': 'tower:type', 'man_made': 'man_made', 'check_date:surface': 'check_date:surface', 'alt_name': 'alt_name', 'ref': 'ref', 'area:aeroway': 'area:aeroway', 'aeroway': 'aeroway', 'access': 'access', 'service': 'service', 'int_name': 'int_name', 'waterway': 'waterway', 'foot': 'foot', 'lanes': 'lanes', 'junction': 'junction', 'lane_markings': 'lane_markings', 'tunnel': 'tunnel', 'surface': 'surface', 'smoothness': 'smoothness', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'name': 'name', 'highway': 'highway', });
lyr_JalanNasionalArteriPrimer_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'content': 'content', 'incline': 'incline', 'level': 'level', 'footway': 'footway', 'location': 'location', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'plant:source': 'plant:source', 'plant:output:electricity': 'plant:output:electricity', 'plant:method': 'plant:method', 'old_ref': 'old_ref', 'old_name': 'old_name', 'int_ref': 'int_ref', 'bicycle': 'bicycle', 'covered': 'covered', 'voltage': 'voltage', 'power': 'power', 'import': 'import', 'width': 'width', 'length': 'length', 'barrier': 'barrier', 'layer': 'layer', 'bridge': 'bridge', 'tower:type': 'tower:type', 'man_made': 'man_made', 'check_date:surface': 'check_date:surface', 'alt_name': 'alt_name', 'ref': 'ref', 'area:aeroway': 'area:aeroway', 'aeroway': 'aeroway', 'access': 'access', 'service': 'service', 'int_name': 'int_name', 'waterway': 'waterway', 'foot': 'foot', 'lanes': 'lanes', 'junction': 'junction', 'lane_markings': 'lane_markings', 'tunnel': 'tunnel', 'surface': 'surface', 'smoothness': 'smoothness', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'name': 'name', 'highway': 'highway', });
lyr_AreaLuarDesa_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasDesa_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasKecamatan_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_TitikPentingDesa_11.set('fieldAliases', {'NO': 'NO', 'Nama': 'Nama', 'Foto': 'Foto', });
lyr_Sungai_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'content': '', 'incline': '', 'level': '', 'footway': '', 'location': '', 'generator:type': '', 'generator:source': '', 'generator:output:electricity': '', 'generator:method': '', 'plant:source': '', 'plant:output:electricity': '', 'plant:method': '', 'old_ref': '', 'old_name': '', 'int_ref': '', 'bicycle': '', 'covered': '', 'voltage': '', 'power': '', 'import': '', 'width': '', 'length': '', 'barrier': '', 'layer': '', 'bridge': '', 'tower:type': '', 'man_made': '', 'check_date:surface': '', 'alt_name': '', 'ref': '', 'area:aeroway': '', 'aeroway': '', 'access': '', 'service': '', 'int_name': '', 'waterway': '', 'foot': '', 'lanes': '', 'junction': '', 'lane_markings': '', 'tunnel': '', 'surface': '', 'smoothness': '', 'sidewalk': '', 'oneway': '', 'name': '', 'highway': '', });
lyr_JalanPermukiman_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'content': '', 'incline': '', 'level': '', 'footway': '', 'location': '', 'generator:type': '', 'generator:source': '', 'generator:output:electricity': '', 'generator:method': '', 'plant:source': '', 'plant:output:electricity': '', 'plant:method': '', 'old_ref': '', 'old_name': '', 'int_ref': '', 'bicycle': '', 'covered': '', 'voltage': '', 'power': '', 'import': '', 'width': '', 'length': '', 'barrier': '', 'layer': '', 'bridge': '', 'tower:type': '', 'man_made': '', 'check_date:surface': '', 'alt_name': '', 'ref': '', 'area:aeroway': '', 'aeroway': '', 'access': '', 'service': '', 'int_name': '', 'waterway': '', 'foot': '', 'lanes': '', 'junction': '', 'lane_markings': '', 'tunnel': '', 'surface': '', 'smoothness': '', 'sidewalk': '', 'oneway': '', 'name': '', 'highway': '', });
lyr_JalanLokalTersier_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'content': '', 'incline': '', 'level': '', 'footway': '', 'location': '', 'generator:type': '', 'generator:source': '', 'generator:output:electricity': '', 'generator:method': '', 'plant:source': '', 'plant:output:electricity': '', 'plant:method': '', 'old_ref': '', 'old_name': '', 'int_ref': '', 'bicycle': '', 'covered': '', 'voltage': '', 'power': '', 'import': '', 'width': '', 'length': '', 'barrier': '', 'layer': '', 'bridge': '', 'tower:type': '', 'man_made': '', 'check_date:surface': '', 'alt_name': '', 'ref': '', 'area:aeroway': '', 'aeroway': '', 'access': '', 'service': '', 'int_name': '', 'waterway': '', 'foot': '', 'lanes': '', 'junction': '', 'lane_markings': '', 'tunnel': '', 'surface': '', 'smoothness': '', 'sidewalk': '', 'oneway': '', 'name': '', 'highway': '', });
lyr_JalanNasionalArteriPrimer_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'content': '', 'incline': '', 'level': '', 'footway': '', 'location': '', 'generator:type': '', 'generator:source': '', 'generator:output:electricity': '', 'generator:method': '', 'plant:source': '', 'plant:output:electricity': '', 'plant:method': '', 'old_ref': '', 'old_name': '', 'int_ref': '', 'bicycle': '', 'covered': '', 'voltage': '', 'power': '', 'import': '', 'width': '', 'length': '', 'barrier': '', 'layer': '', 'bridge': '', 'tower:type': '', 'man_made': '', 'check_date:surface': '', 'alt_name': '', 'ref': '', 'area:aeroway': '', 'aeroway': '', 'access': '', 'service': '', 'int_name': '', 'waterway': '', 'foot': '', 'lanes': '', 'junction': '', 'lane_markings': '', 'tunnel': '', 'surface': '', 'smoothness': '', 'sidewalk': '', 'oneway': '', 'name': '', 'highway': '', });
lyr_AreaLuarDesa_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'REMARK': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', });
lyr_BatasDesa_9.set('fieldImages', {'fid': '', 'OBJECTID': '', 'REMARK': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', });
lyr_BatasKecamatan_10.set('fieldImages', {'fid': '', 'OBJECTID': '', 'REMARK': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_TitikPentingDesa_11.set('fieldImages', {'NO': 'TextEdit', 'Nama': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Sungai_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'content': 'no label', 'incline': 'no label', 'level': 'no label', 'footway': 'no label', 'location': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'plant:source': 'no label', 'plant:output:electricity': 'no label', 'plant:method': 'no label', 'old_ref': 'no label', 'old_name': 'no label', 'int_ref': 'no label', 'bicycle': 'no label', 'covered': 'no label', 'voltage': 'no label', 'power': 'no label', 'import': 'no label', 'width': 'no label', 'length': 'no label', 'barrier': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tower:type': 'no label', 'man_made': 'no label', 'check_date:surface': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'area:aeroway': 'no label', 'aeroway': 'no label', 'access': 'no label', 'service': 'no label', 'int_name': 'no label', 'waterway': 'no label', 'foot': 'no label', 'lanes': 'no label', 'junction': 'no label', 'lane_markings': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'name': 'no label', 'highway': 'no label', });
lyr_JalanPermukiman_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'content': 'no label', 'incline': 'no label', 'level': 'no label', 'footway': 'no label', 'location': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'plant:source': 'no label', 'plant:output:electricity': 'no label', 'plant:method': 'no label', 'old_ref': 'no label', 'old_name': 'no label', 'int_ref': 'no label', 'bicycle': 'no label', 'covered': 'no label', 'voltage': 'no label', 'power': 'no label', 'import': 'no label', 'width': 'no label', 'length': 'no label', 'barrier': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tower:type': 'no label', 'man_made': 'no label', 'check_date:surface': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'area:aeroway': 'no label', 'aeroway': 'no label', 'access': 'no label', 'service': 'no label', 'int_name': 'no label', 'waterway': 'no label', 'foot': 'no label', 'lanes': 'no label', 'junction': 'no label', 'lane_markings': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'name': 'no label', 'highway': 'no label', });
lyr_JalanLokalTersier_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'content': 'no label', 'incline': 'no label', 'level': 'no label', 'footway': 'no label', 'location': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'plant:source': 'no label', 'plant:output:electricity': 'no label', 'plant:method': 'no label', 'old_ref': 'no label', 'old_name': 'no label', 'int_ref': 'no label', 'bicycle': 'no label', 'covered': 'no label', 'voltage': 'no label', 'power': 'no label', 'import': 'no label', 'width': 'no label', 'length': 'no label', 'barrier': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tower:type': 'no label', 'man_made': 'no label', 'check_date:surface': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'area:aeroway': 'no label', 'aeroway': 'no label', 'access': 'no label', 'service': 'no label', 'int_name': 'no label', 'waterway': 'no label', 'foot': 'no label', 'lanes': 'no label', 'junction': 'no label', 'lane_markings': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'name': 'no label', 'highway': 'no label', });
lyr_JalanNasionalArteriPrimer_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'content': 'no label', 'incline': 'no label', 'level': 'no label', 'footway': 'no label', 'location': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'plant:source': 'no label', 'plant:output:electricity': 'no label', 'plant:method': 'no label', 'old_ref': 'no label', 'old_name': 'no label', 'int_ref': 'no label', 'bicycle': 'no label', 'covered': 'no label', 'voltage': 'no label', 'power': 'no label', 'import': 'no label', 'width': 'no label', 'length': 'no label', 'barrier': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tower:type': 'no label', 'man_made': 'no label', 'check_date:surface': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'area:aeroway': 'no label', 'aeroway': 'no label', 'access': 'no label', 'service': 'no label', 'int_name': 'no label', 'waterway': 'no label', 'foot': 'no label', 'lanes': 'no label', 'junction': 'no label', 'lane_markings': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'name': 'no label', 'highway': 'no label', });
lyr_AreaLuarDesa_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_BatasDesa_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'REMARK': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', });
lyr_BatasKecamatan_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_TitikPentingDesa_11.set('fieldLabels', {'NO': 'hidden field', 'Nama': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_TitikPentingDesa_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});