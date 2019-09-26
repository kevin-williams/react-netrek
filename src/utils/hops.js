export const HOPS = [
  {
    id: 'M13',
    label: 'M13 (easy)',
    description:
      'Hop to M13 (Hercules Cluster) starting at the star Eta Herculis (very easy) or Zeta Herculis (easy).',
    hint:
      'You can see M13 in the finder view.   But check the patterns of stars with your chart to learn to align them with what you see.\n\nMatch the triangle SE of the starting point and the 2 stars straddling M13.',
    starMapQuery: {
      raFrom: 15.75,
      raTo: 18.25,
      decFrom: 24,
      decTo: 48,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Eta Herculis',
        ra: 16.715,
        dec: 38.92
      },
      {
        name: 'Zeta Herculis',
        ra: 16.688,
        dec: 31.606
      }
    ],
    targetLocation: {
      ra: 16.7,
      dec: 36.42
    }
  },
  {
    id: 'M16',
    label: 'M16 (medium)',
    description:
      'Hop to M16 (Eagle Nebula) starting at Kaus Borealis (top of the teapot/Sagittarius)',
    hint:
      "If you did the M22 hop and then the M25 hop, repeat those steps and then continue on to M16.\n\nThere are many Messier objects in this area.  Don't get distracted!",
    starMapQuery: {
      raFrom: 17.5,
      raTo: 19.5,
      decFrom: -35,
      decTo: 0,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Kaus Borealis',
        ra: 18.466,
        dec: -25.432
      },
      {
        name: 'Phi Sagittarii',
        ra: 18.759,
        dec: -26.969
      },
      {
        name: 'Nunki',
        ra: 18.922,
        dec: -26.299
      }
    ],
    targetLocation: {
      ra: 18.33,
      dec: -13.773
    }
  },
  {
    id: 'M22',
    label: 'M22 (easy)',
    description:
      'Hop to M22 starting at Kaus Borealis (top of the teapot/Sagittarius)',
    hint:
      'Another very easy hop.  M28 is near the starting point as well.\n\nTake your time to get your chart aligned.  In and around Sagittarius it is easy to find objects to see.   But to know which one you are viewing you have to keep track of your star field.\n\nOnce found, move on to the M25 hop.',
    starMapQuery: {
      raFrom: 17.5,
      raTo: 19.5,
      decFrom: -35,
      decTo: 0,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Kaus Borealis',
        ra: 18.466,
        dec: -25.432
      },
      {
        name: 'Phi Sagittarii',
        ra: 18.759,
        dec: -26.969
      },
      {
        name: 'Nunki',
        ra: 18.922,
        dec: -26.299
      }
    ],
    targetLocation: {
      ra: 18.625,
      dec: -23.887
    }
  },
  {
    id: 'M25',
    label: 'M25 (medium)',
    description:
      'Hop to M25 starting at Kaus Borealis (top of the teapot/Sagittarius)',
    hint:
      'First ease over to M22, then follow the stars up.  M25 is right next to a large clump of stars with an obvious pattern.  Next head to M16.',
    starMapQuery: {
      raFrom: 17.5,
      raTo: 19.5,
      decFrom: -35,
      decTo: 0,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Kaus Borealis',
        ra: 18.466,
        dec: -25.432
      },
      {
        name: 'Phi Sagittarii',
        ra: 18.759,
        dec: -26.969
      },
      {
        name: 'Nunki',
        ra: 18.922,
        dec: -26.299
      }
    ],
    targetLocation: {
      ra: 18.547,
      dec: -19.1
    }
  },
  {
    id: 'M27',
    label: 'M27 (hard)',
    description:
      'Hop to M27 (Dumbell Nebula) starting at the star Altair (long hop on purpose)',
    hint:
      'This is a long hop.  Find the angle you need to travel to get to M27 and line it up with the stars in the finder\n\nSee the long triangle above the starting point?  Use it to get your angle.\n\nYou will probably have to move left and right to follow the stars as you move up.  Just check regularly that the direction is still correct.',
    starMapQuery: {
      raFrom: 18.5,
      raTo: 20.5,
      decFrom: 0,
      decTo: 30,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Altair',
        ra: 19.846,
        dec: 8.875
      },
      {
        name: 'Zeta Aquilae',
        ra: 19.091,
        dec: 13.873
      }
    ],
    targetLocation: {
      ra: 20.0,
      dec: 22.76
    }
  },
  {
    id: 'M55',
    label: 'M55 (medium)',
    description:
      'Hop to M55 starting at Ascella (bottom of the teapot handle/Sagittarius)',
    hint:
      'Follow the patterns of stars west.  Remember to keep your place in your chart or move the view on your digital chart to keep your place!',
    starMapQuery: {
      raFrom: 18.5,
      raTo: 21.5,
      decFrom: -35,
      decTo: -20,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Ascella',
        ra: 19.043,
        dec: -29.875
      },
      {
        name: 'Phi Sagittarii',
        ra: 18.759,
        dec: -26.969
      },
      {
        name: 'Nunki',
        ra: 18.922,
        dec: -26.299
      }
    ],
    targetLocation: {
      ra: 19.685,
      dec: -30.921
    }
  },
  {
    id: 'M56',
    label: 'M56 (medium)',
    description:
      'Hop to M56 (Globular cluster) starting at the star Vega (Hint: Similar to M57 hop, but farther!)',
    hint:
      'Do the M57 hop first.\n\n Then continue on to M56.  Near the target are several triangles of stars to help you get oriented.',
    starMapQuery: {
      raFrom: 18,
      raTo: 20,
      decFrom: 26,
      decTo: 43,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Vega',
        ra: 18.616,
        dec: 38.79
      }
    ],
    targetLocation: {
      ra: 19.29,
      dec: 30.21
    }
  },
  {
    id: 'M57',
    label: 'M57 (medium)',
    description:
      'Hop to M57 (Ring Nebula) starting at the star Vega (Hint: M57 is small!)',
    hint:
      'Vega is bright and makes an easy start point.  There are many bright stars to help in the hop.  You can hop from bright star to bright star by just moving the last star to the edge of the finder.\n\nAlso the pattern is easily recognizable in the naked eye view and you can use the Telrad circles to position the eyepiece view quickly.\n\nM57 is small and in low magnifications will appear stellar.',
    starMapQuery: {
      raFrom: 18,
      raTo: 20,
      decFrom: 30,
      decTo: 45,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Vega',
        ra: 18.616,
        dec: 38.79
      }
    ],
    targetLocation: {
      ra: 18.88,
      dec: 33.03
    }
  },
  {
    id: 'M76',
    label: 'M76 (medium)',
    description:
      'Hop to M76 (Little Dumbbell Nebula) starting at the star Shedar in Cassiopeia.',
    hint:
      'Right off you have a fairly empty starfield to hop through.\n\nHop to the little triangle first, then find the one star near the bottom left or your star field.\n\nOften there is only 1 star you can use to get to the next section of your hop.  This is an example of that.',
    starMapQuery: {
      raFrom: 0,
      raTo: 6,
      decFrom: 45,
      decTo: 70,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Shedar',
        ra: 0.675,
        dec: 56.54
      },
      {
        name: 'Navi',
        ra: 0.946,
        dec: 60.715
      },
      {
        name: 'Ruchbah',
        ra: 1.431,
        dec: 60.241
      }
    ],
    targetLocation: {
      ra: 1.73,
      dec: 51.657
    }
  },
  {
    id: 'M81',
    label: 'M81 (hard)',
    description:
      'Hop to M81 Galaxy starting at the star Dubhe (tip of the ladle in the big dipper)',
    hint:
      "Starting at the end of the big dipper is easier, especially if you're not in really dark skies.   But the first hops will need to be large as the starfield is sparse.\n\nKeep your orientation and target direction as you make the long hops.\n\nM81 is fairly bright and unless you have severe light pollution or a small finder, it should show in your finder.\n\n As a bonus, M82 is close by!",
    starMapQuery: {
      raFrom: 8,
      raTo: 12,
      decFrom: 50,
      decTo: 70,
      magLimit: 15
    },
    startingLocation: [
      {
        name: 'Dubhe',
        ra: 11.062,
        dec: 61.755
      },
      {
        name: 'h Ursae Majoris',
        ra: 9.526,
        dec: 63.066
      }
    ],
    targetLocation: {
      ra: 9.92,
      dec: 69.06
    }
  }
];
