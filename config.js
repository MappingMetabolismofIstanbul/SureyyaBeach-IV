
var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Bakireler Anıtı / The Temple of the Virgins',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'boş',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [ 29.12420879460502,40.92681852967929],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/chcyXPJP/1.png',
            description: '',
            location: {
                center: [ 29.12420879460502,40.92681852967929],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/WvSVVrCb/bak2.png',
            description: '',
            location: {
                center: [ 29.12420879460502,40.92681852967929],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Q72cYyQ3/bak3.png',
            description: '',
            location: {
                center: [ 29.12420879460502,40.92681852967929],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            
        },
        {
            id: '4',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/0pH5Sc2K/s-reyya-giff.gif',
            description: 'Bakireler Anıtı’nın zaman içerisinde değişimi / The transformation of the Temple over time',
            location: {
                 center: [29.123988521073176,40.92627744548676],
                zoom: 17,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/9HMhNsYL/3.png',
            description: '',
            location: {
                center: [29.123988521073176,40.92627744548676],
                zoom: 18,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            
        },
    
    ]
};
