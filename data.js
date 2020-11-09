var APP_DATA = {
  "scenes": [
    {
      "id": "0-rommutama",
      "name": "rommutama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 650,
      "initialViewParameters": {
        "yaw": 0.5353329237469548,
        "pitch": -0.0014508151125465218,
        "fov": 1.2845815199784116
      },
      "linkHotspots": [
        {
          "yaw": -2.3652053412758107,
          "pitch": -0.154818557121299,
          "rotation": 0,
          "target": "1-pano_kid_color"
        },
        {
          "yaw": 1.1585969216618643,
          "pitch": -0.2676450295099926,
          "rotation": 0,
          "target": "2-room"
        },
        {
          "yaw": -0.30359364212401196,
          "pitch": -0.010280221897737363,
          "rotation": 0,
          "target": "3-dapur"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.147282858827575,
          "pitch": 0.008047985904592991,
          "title": "Ruang Kerja",
          "text": "Ini adalah Ruang kerja"
        }
      ]
    },
    {
      "id": "1-pano_kid_color",
      "name": "pano_kid_color",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6181809111873342,
          "pitch": 0.09918871768945436,
          "rotation": 0,
          "target": "0-rommutama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-room",
      "name": "room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -2.936061136953846,
        "pitch": 0.05853959037435885,
        "fov": 1.2845815199784116
      },
      "linkHotspots": [
        {
          "yaw": -2.8792598007390957,
          "pitch": -0.2204352536644265,
          "rotation": 0,
          "target": "0-rommutama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dapur",
      "name": "dapur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6278042040098537,
          "pitch": 0.0240694272585813,
          "rotation": 0,
          "target": "0-rommutama"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7026176894939624,
          "pitch": 0.1522893031923438,
          "title": "Buah Buahan",
          "text": "Tempat Buah buahan"
        },
        {
          "yaw": -0.14147265843501344,
          "pitch": 0.31539459499007627,
          "title": "Wastafel",
          "text": "Wastafel Merk TOTO Rp.1 j,5 jt"
        },
        {
          "yaw": 1.7014737525789076,
          "pitch": 0.013577208437208554,
          "title": "Lemari Es",
          "text": "Lemari Es merk Nasional Rp 2,5 jt"
        },
        {
          "yaw": -2.600003217550441,
          "pitch": -0.16044985068854167,
          "title": "Owner House",
          "text": "Ini adalah pemilik rumah"
        },
        {
          "yaw": -2.307510399077895,
          "pitch": 0.47833373366551335,
          "title": "Meja makan",
          "text": "Meja makan Rp 4 jt"
        },
        {
          "yaw": -1.1540343461029643,
          "pitch": 0.04513173160161088,
          "title": "Microwave",
          "text": "Microwave sanyo Rp 5 jt"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
