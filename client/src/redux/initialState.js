export const initialState = {
  members: {
    data: {
      conductor: [
        {
          id: 1,
          name: 'Dyrygent',
          photo: 'https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png',
        },
      ],
      soprano: [
        {
          id: 1,
          name: 'Sopran #1',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 2,
          name: 'Sopran #2',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 3,
          name: 'Sopran #3',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 4,
          name: 'Sopran #4',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 5,
          name: 'Sopran #5',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 6,
          name: 'Sopran #6',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
      ],
      alto: [
        {
          id: 1,
          name: 'Alt #1',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 2,
          name: 'Alt #2',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 3,
          name: 'Alt #3',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 4,
          name: 'Alt #4',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 5,
          name: 'Alt #5',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 6,
          name: 'Alt #6',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
        {
          id: 7,
          name: 'Alt #7',
          photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
        },
      ],
      tenor: [
        {
          id: 1,
          name: 'Tenor #1',
          photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
        },
        {
          id: 2,
          name: 'Tenor #2',
          photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
        },
        {
          id: 3,
          name: 'Tenor #3',
          photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
        },
      ],
      bass: [
        {
          id: 1,
          name: 'Bas #1',
          photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
        },
        {
          id: 2,
          name: 'Bas #2',
          photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
        },
        {
          id: 3,
          name: 'Bas #3',
          photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
        },
        {
          id: 4,
          name: 'Bas #4',
          photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
        },
      ],
    },
    loading: {
      active: false,
      error: false,
    },
  },
  gallery: {
    photos: [
      {
        id: 1,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/120087878_2496408390658251_6353777256144409988_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=eIv1AqLGcdYAX9Ui4P7&_nc_ht=scontent-waw1-1.xx&oh=68f9e173611cecaecd742596b8a2a6a5&oe=5FD50AFD',
        description: 'Photo 1',
      },
      {
        id: 2,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/119831429_2493004820998608_6692877134328579026_o.jpg?_nc_cat=110&ccb=2&_nc_sid=9267fe&_nc_ohc=zUAiIrl5FWgAX_jamAT&_nc_ht=scontent-waw1-1.xx&oh=29738fcfc9469b462d8c8a82cd559473&oe=5FD1D2DB',
        description: 'Photo 2',
      },
      {
        id: 3,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/116471767_2450725638559860_4763492988959378248_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=6jyGiMQovDYAX_spVkQ&_nc_ht=scontent-waw1-1.xx&oh=2040edbf4dfe7c77d6eae202e93d5496&oe=5FD160D8',
        description: 'Photo 3',
      },
      {
        id: 4,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/71259526_2189996994632727_1015966035603357696_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=GgoZxbd5S3wAX_5pLVW&_nc_ht=scontent-waw1-1.xx&oh=a8476ff23525f72265bbe41a31d47b58&oe=5FD1F9F3',
        description: 'Photo 4',
      },
      {
        id: 5,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/81760137_10157807131844264_916384719174631424_n.jpg?_nc_cat=100&ccb=2&_nc_sid=b9115d&_nc_ohc=zSpfJ6msFG0AX8SdJcP&_nc_ht=scontent-waw1-1.xx&oh=9c3b567ca0486b78eef6e49176909d91&oe=5FD40F82',
        description: 'Photo 5',
      },
      {
        id: 6,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/73390796_3168160826543757_5965541344569982976_o.jpg?_nc_cat=105&ccb=2&_nc_sid=b9115d&_nc_ohc=yvwcwAJC3loAX-zKKjB&_nc_ht=scontent-waw1-1.xx&oh=598ae3c955dc618e727a73119e7ee35c&oe=5FD3DCAC',
        description: 'Photo 6',
      },
      {
        id: 7,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/71593860_2613447758693257_6304912733833789440_o.jpg?_nc_cat=107&ccb=2&_nc_sid=b9115d&_nc_ohc=0lS5mUgJxJkAX_V5oNM&_nc_ht=scontent-waw1-1.xx&oh=b4e91d09774a9c4b028f5cf2bd900ae4&oe=5FD4AC92',
        description: 'Photo 7',
      },
      {
        id: 8,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/72409843_2613447372026629_1948812183307550720_o.jpg?_nc_cat=111&ccb=2&_nc_sid=b9115d&_nc_ohc=_wdL0ieHeaIAX-PQfgd&_nc_ht=scontent-waw1-1.xx&oh=113640b44dd0154e15e56ed4468d6d50&oe=5FD18949',
        description: 'Photo 8',
      },
      {
        id: 9,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/61172804_2361964620508240_7431659131485814784_n.jpg?_nc_cat=101&ccb=2&_nc_sid=b9115d&_nc_ohc=zqvYkumONjsAX--IM_b&_nc_ht=scontent-waw1-1.xx&oh=e310bf1e2a93c7064705c886dc3c9932&oe=5FD476C9',
        description: 'Photo 9',
      },
      {
        id: 10,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/61008491_2361960840508618_1934453785514475520_n.jpg?_nc_cat=104&ccb=2&_nc_sid=b9115d&_nc_ohc=6FyZ1JoObdwAX_fDEpq&_nc_ht=scontent-waw1-1.xx&oh=90f7d8446fd9b9ec547bab3685e259d7&oe=5FD379E4',
        description: 'Photo 10',
      },
      {
        id: 11,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/60547984_2268580296740385_4367771166375411712_o.jpg?_nc_cat=101&ccb=2&_nc_sid=825194&_nc_ohc=PBGDYhdZIlwAX_vNL8P&_nc_ht=scontent-waw1-1.xx&oh=3ca0bcdab06d550330413f3c29af7d08&oe=5FD4D9EC',
        description: 'Photo 11',
      },
      {
        id: 12,
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/56664638_10213973380913700_5854120504113233920_o.jpg?_nc_cat=101&ccb=2&_nc_sid=825194&_nc_ohc=nNuq2ps4BhwAX-NCXEW&_nc_ht=scontent-waw1-1.xx&oh=d58457b7e1777ae5d3137b93febc8006&oe=5FD19143',
        description: 'Photo 12',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
