const cardData = [
    {
        "id": 1,
        "title": "Home made pizza",
        "price": "190",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/3f4b/d9f6/087c8944b1b24580544cd76fcfd54b5a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pAQG-zuSrDbZ9RildMsiHPvqI~B~r3WlRfKPVE60w1QmH6As1HWK2Ke2NG8pIcx78JrJ3LcJc5sXQwdbgtvzfw2L5yscPIR8NnYoSK5CW3ggKWXpv4jqlIYdJ4hDs8NFfm6w0kWJxuw8NutToCq5pdd~LK3SZeembozqb1JcoY7BmJF7A9x9~yJ8Vldc2D8YVu7VP73BJWY7Xc7bULhnjK3wyoaOqSswzy1L-kekDaZcwAQCdmqOnLcYBvQLTI2gtC-n~Kznkx5hnP5C6YhDoVVXltq3eG6yKhdifPPpOc0GmQ4FJlaApdYsGLv2vsHTNZEowdZaWgUMtjTJefbkDw__"
    },
    {
        "id": 2,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/1a41/8a68/e77ae6f20de07ad299fb858d8bc974d7?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NviPiUUjrMQN80T~a03keaQEmfkq4uF91Oq-haz2YbP~CmejHaSCb~6jJJr76e-S1kzuHHGUVJF36gEDFwYspXIgzik5oEXA8kqzNrNLgQrMSsEXNrusTC-gD2u2OC5oHCTlTYWBe2cwnWQzSm1GuVxo7g6h~IQHSXkRDQk7Cn3DuiG~At52utRNjoL8OCOyrnxH-1BvS4p~S4Rlu-HtS7B4LgmdMw2uq44r3Hx39Iv37FsOBCHwTWQWa5R4hxPg9Y3PptS5CnJoEGKbUPA3YE3vrabqc8uozfcnt5mzQiLCBdC3nQIlBNuyaVp14eYWhNE~8p35wCJ6lqmqDSc~wg__"
    },
    {
        "id": 3,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "20%",
        "image": "https://s3-alpha-sig.figma.com/img/98a2/d89b/bbea8bc1d54234bfd7dcd4eaa5faa209?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8nDi8alHtbh1q85TNzsy19on~c8co2M9j~FpC4fCBxkhl04veKPLbs2nPlGXrue0USMR-SAz8NDPmm73fr8B4zuOJzq63hPxPP39xDqyIaE347mV2C2O9jIZg6UGZ9UmbQTLuJRJwKXdIIAvTVT5gYHG1WQmUzZNc8SmGJdhzbzQQt9Q7Zwv-ZZc3JsTEpJy4Hmb0sznnWEKBd0JIbY1fZP2YMZdMEa42ovUFhnl6xTpHGLWJyWprdtvygnYliqVrfR3XTbSxjKV5KWJeUg0ecnMbOypR6YYdY2LkJlncjOYlDmfRT9aeXJfvcXzrWpK-ztwQGlDTvdQ4FrL2e~BQ__"
    },
    {
        "id": 4,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/5e27/8ddc/229d9dfd41d162fda067f905fffb5c27?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1nJnwVN9wiWcTjFOhro~Uin~wHNGlIMLzV0J7-JJyXdsYShxPwKiLvlmRqs7u8qzJcXZOIgVMXsPqFP4PZIby3s1CTIFpVOxRFOm~rlXxzQMCekfmDVObQRFOzok~n5zEhsGo4gNi1SqSI5h~G95G2ws1JhqyLtgsZn9RylLsNrMVNriTWTkWcexbDLaTtQugGuCj5tYcT3E2Oqp~KqAvWDsSGjD7xYHmFw2Zs2giPMnmw6SZCmRqvQRFAE7moZU1bU0rFqokFBoIXX1d7Xz9jCxq1BZ1XZAp7iUmAG9SMfw6N3gkRqLUFhlGZ06nn~s6-~q4IQiSUicyP~mvnt6A__"
    },
    {
        "id": 5,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/420b/fcd5/fe043b16575841c6f832b04d318f3481?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n8ofFCGo9zlYB9FKP0XHhhaQ-vZ8-fu4s7M102wKxC3YUxGRRnKj1u32v1i~rgOp1MhQmx-mOTbhg1xRTSzfhmLUENTY0O8WQJRPtOa1esgYvBxKVmVJQPkEtoXTLiibOoXygc8D2pzwmja0no57ZSVpt~q~6LFdZVaSVOcNz1VC8HjFpChtotrXuwireC0FqXHuHXeSelgRArsK82-qIaGs6y6IB1055p7Yp434Shmufhs18DaF6yBVJEY8RTXyZT~5fRz1ui01THrm3ZHffyQLuSOaWojkTd2CBByrMmsXnxllK3UJ8OTEeCO3WtHw~hC87Egy2C-PtaYA27081g__"
    },
    {
        "id": 6,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/9a75/3bce/b4cce300a2f4d221b8ed82067642e4aa?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YTji15-KM6tvZNtVFP-EuITZJpS2nHk3tQ4FX4yBhMWXVr2uU-Np44sjmerPEMUxHvqgy5koTWkObk~s25JXTODXN2XRjNYiqXF4p-qCRUaTgsk-RM5CC62qfF0o54qlDrS1iDwAxT1nWzCKWyzUg7RowxrOXoHLc0wJfg5PHBIahM-LPYTQB5MFIsfRvqiM~syHKQHx-1-s1X4F2KUgrQ~IeUntS63VUzTK8YFl6SwdImeo74gNpVaSMBvKA2Ptd6ibuvyVbRX47ODpiwkpH8oNGn7kF5EV3DVN-PludMG9ACzDd4knctAdOK0DrqMSaMdAsRuozrbqWD9L64aQ3g__"
    },
    {
        "id": 7,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "20%",
        "image": "https://s3-alpha-sig.figma.com/img/dd00/9b9f/2eaf503b68e4ff2c44b92b539b7a43ca?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HfsCxWiWLxdYf3GahlO4v-wHRY97n4Z9BMCCrwO-ZgmPqHodBZ2gxHf84b1bekqV4EsC4PTYfr9ARNnou3SP04nnRXgoL9DeiqUcGb~0qv~RB3~t933TIuzWqpdQWI0wonnfKdK4KaspUIWLG4h6SO2JjLbHMKUO5HoIicEy5guGMuf3fy8DvHvFmtaJGv7D-ZIlVz1A8MaO6heXIs0oD5qJOMqjjOGS9-B74fjK4wuT1k7eWNzGGFT8~--9bktrdG6mXw~9OEv-8bap1VF8f9KoTs8xb8vdBvcYoWMYHho6BB-erpAop8PX00euYQxjGpY-OQtq5TrrZD83HItzMg__"
    },
    {
        "id": 8,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/6aeb/35a8/959b9b1b355181560f5c02c5f770653d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k-mO1ymkB3qHCT96zFTLb2jUmL-nex-uwbaafH7JdC0Uw71pJRu6CFhOEHQDnHECTTBQCfRBTw3Uiy6sePmS3kpQcgwN1xHY8NFf~TGM~3ErD5rhuN1IsYHgpmbaHsE546u8LU~PCtGIQmpBCS5mKVwQXVuBHdBQ-uDD-2n5SX~xhITavB04FSWDG3wJV0ZlrJ2CDngv-Ba4zPggnSWY2G3Jb4cP5yNDLOL4Dv3BipODSfPlKVVX4OW5MWG8C5kBojTNVy7WfJQCNPVXg2-7El1jryc2XAYU28rNxcFFZY3UMpA6SDiXx3618cl4w9q8SymaJ-ZfE5U-REDx9GpStQ__"
    },
    {
        "id": 9,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/3f4b/d9f6/087c8944b1b24580544cd76fcfd54b5a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pAQG-zuSrDbZ9RildMsiHPvqI~B~r3WlRfKPVE60w1QmH6As1HWK2Ke2NG8pIcx78JrJ3LcJc5sXQwdbgtvzfw2L5yscPIR8NnYoSK5CW3ggKWXpv4jqlIYdJ4hDs8NFfm6w0kWJxuw8NutToCq5pdd~LK3SZeembozqb1JcoY7BmJF7A9x9~yJ8Vldc2D8YVu7VP73BJWY7Xc7bULhnjK3wyoaOqSswzy1L-kekDaZcwAQCdmqOnLcYBvQLTI2gtC-n~Kznkx5hnP5C6YhDoVVXltq3eG6yKhdifPPpOc0GmQ4FJlaApdYsGLv2vsHTNZEowdZaWgUMtjTJefbkDw__"
    },
    {
        "id": 10,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/1a41/8a68/e77ae6f20de07ad299fb858d8bc974d7?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NviPiUUjrMQN80T~a03keaQEmfkq4uF91Oq-haz2YbP~CmejHaSCb~6jJJr76e-S1kzuHHGUVJF36gEDFwYspXIgzik5oEXA8kqzNrNLgQrMSsEXNrusTC-gD2u2OC5oHCTlTYWBe2cwnWQzSm1GuVxo7g6h~IQHSXkRDQk7Cn3DuiG~At52utRNjoL8OCOyrnxH-1BvS4p~S4Rlu-HtS7B4LgmdMw2uq44r3Hx39Iv37FsOBCHwTWQWa5R4hxPg9Y3PptS5CnJoEGKbUPA3YE3vrabqc8uozfcnt5mzQiLCBdC3nQIlBNuyaVp14eYWhNE~8p35wCJ6lqmqDSc~wg__"
    },
    {
        "id": 11,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "20%",
        "image": "https://s3-alpha-sig.figma.com/img/98a2/d89b/bbea8bc1d54234bfd7dcd4eaa5faa209?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8nDi8alHtbh1q85TNzsy19on~c8co2M9j~FpC4fCBxkhl04veKPLbs2nPlGXrue0USMR-SAz8NDPmm73fr8B4zuOJzq63hPxPP39xDqyIaE347mV2C2O9jIZg6UGZ9UmbQTLuJRJwKXdIIAvTVT5gYHG1WQmUzZNc8SmGJdhzbzQQt9Q7Zwv-ZZc3JsTEpJy4Hmb0sznnWEKBd0JIbY1fZP2YMZdMEa42ovUFhnl6xTpHGLWJyWprdtvygnYliqVrfR3XTbSxjKV5KWJeUg0ecnMbOypR6YYdY2LkJlncjOYlDmfRT9aeXJfvcXzrWpK-ztwQGlDTvdQ4FrL2e~BQ__"
    },
    {
        "id": 12,
        "title": "Home made pizza",
        "price": "123",
        "ragings": "4.7", 
        "time": "50-79",
        "discount": "",
        "image": "https://s3-alpha-sig.figma.com/img/5e27/8ddc/229d9dfd41d162fda067f905fffb5c27?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1nJnwVN9wiWcTjFOhro~Uin~wHNGlIMLzV0J7-JJyXdsYShxPwKiLvlmRqs7u8qzJcXZOIgVMXsPqFP4PZIby3s1CTIFpVOxRFOm~rlXxzQMCekfmDVObQRFOzok~n5zEhsGo4gNi1SqSI5h~G95G2ws1JhqyLtgsZn9RylLsNrMVNriTWTkWcexbDLaTtQugGuCj5tYcT3E2Oqp~KqAvWDsSGjD7xYHmFw2Zs2giPMnmw6SZCmRqvQRFAE7moZU1bU0rFqokFBoIXX1d7Xz9jCxq1BZ1XZAp7iUmAG9SMfw6N3gkRqLUFhlGZ06nn~s6-~q4IQiSUicyP~mvnt6A__"
    },
]

export default cardData;