const characters = {
    生活: {
        生活１: {
            起: {
                訓読み: ['おーきる　おーこる　おーこす'],
                音読み:['キ'],
            },
            寝: {
                訓読み: ['ねーる　ねーかす'],
                音読み:['シン'],
            },
            浴: {
                訓読み: ['あーびる　あーびせる'],
                音読み:['ヨク'],
            },
            湯: {
                訓読み: ['ゆ'],
                音読み:['トウ'],
            },
        },
        生活２: {
            洗: {
                訓読み: ['あらーう'],
                音読み:['セン'],
            },
            濯: {
                訓読み: [],
                音読み:['タク'],
            },
            干: {
                訓読み: ['ほーす　ひーる'],
                音読み:['カン'],
            },
            活: {
                訓読み: [],
                音読み:['カツ'],
            },
        },
        ゴミ: {
            拾: {
                訓読み: ['ひろーう'],
                音読み:['シユウ　ジユウ'],
            },
            捨: {
                訓読み: ['すーてる'],
                音読み:['シャ'],
            },
            燃: {
                訓読み: ['もーえる　もーやす　もーす'],
                音読み:['ネン'],
            },
            袋: {
                訓読み: ['ふくろ'],
                音読み:['タイ'],
            },
        },
        カレンダー１: {
            曜: {
                訓読み: [],
                音読み:['ヨウ'],
            },
            末: {
                訓読み: ['すえ'],
                音読み:['マツ　バツ'],
            },
            昨: {
                訓読み: [],
                音読み:['サク'],
            },
            翌: {
                訓読み: [],
                音読み:['ヨク'],
            },
        },
        カレンダー２: {
            予: {
                訓読み: [],
                音読み:['ヨ'],
            },
            定: {
                訓読み: ['さだーまる　さだーめる　さだーか'],
                音読み:['テイ　ジョウ'],
            },
            用: {
                訓読み: ['もちーいる'],
                音読み:['ヨウ'],
            },
            事: {
                訓読み: ['こと'],
                音読み:['ジ　ズ'],
            },
        },
    },
    家: {
        室内１: {
            押: {
                訓読み: ['おーす　おーさえる'],
                音読み:['オウ'],
            },
            引: {
                訓読み: ['ひーく　ひーける'],
                音読み:['イン'],
            },
            取: {
                訓読み: ['とーる'],
                音読み:['シュ'],
            },
            消: {
                訓読み: ['きーえる　けーす'],
                音読み:['シユウ'],
            },
        },
        室内２: {
            戸: {
                訓読み: ['と'],
                音読み:['コ'],
            },
            窓: {
                訓読み: ['まど'],
                音読み:['ソウ'],
            },
            階: {
                訓読み: [],
                音読み:['カイ'],
            },
            段: {
                訓読み: [],
                音読み:['ダン'],
            },
        },
        植物: {
            植: {
                訓読み: ['うーえる　うーわる'],
                音読み:['ショク'],
            },
            葉: {
                訓読み: ['は'],
                音読み:['ヨウ'],
            },
            実: {
                訓読み: ['みのーる　み'],
                音読み:['ジツ'],
            },
            根: {
                訓読み: ['ね'],
                音読み:['コン'],
            },
        },
        建築: {
            建: {
                訓読み: ['たーつ　たーてる'],
                音読み:['ケン　コン'],
            },
            築: {
                訓読み: ['きずーく'],
                音読み:['チク'],
            },
            構: {
                訓読み: ['かまーう　かまーえる'],
                音読み:['コウ'],
            },
            造: {
                訓読み: ['つくーる'],
                音読み:['ゾウ'],
            },
        },
        室内３: {
            設: {
                訓読み: ['もうーける'],
                音読み:['セツ'],
            },
            柱: {
                訓読み: ['はしら'],
                音読み:['チュウ'],
            },
            庫: {
                訓読み: [],
                音読み:['コ　ク'],
            },
            向: {
                訓読み: ['むーく　むーける　むーかう　むーこう'],
                音読み:['コウ'],
            },
        },
    },
    料理: {
        作る１: {
            熱: {
                訓読み: ['あつーい'],
                音読み:['ネツ'],
            },
            冷: {
                訓読み: ['ひーえる　ひーやす　さーめる　さーます　ひーやかす　つめーたい　ひーや'],
                音読み:['レイ'],
            },
            温: {
                訓読み: ['あたたーまる　あたたーめる　あたたーかい　あたたーか'],
                音読み:['オン'],
            },
            度: {
                訓読み: ['たび'],
                音読み:['ド　ト　タク'],
            },
        },
        作る２: {
            材: {
                訓読み: [],
                音読み:['ザイ'],
            },
            型: {
                訓読み: ['かた'],
                音読み:['ケイ'],
            },
            焼: {
                訓読み: ['やーける　やーく'],
                音読み:['ショウ'],
            },
            器: {
                訓読み: ['うつわ'],
                音読み:['キ'],
            },
        },
        食材１: {
            卵: {
                訓読み: ['たまご'],
                音読み:['ラン'],
            },
            乳: {
                訓読み: ['ちち　ち'],
                音読み:['ニュウ'],
            },
            粉: {
                訓読み: ['こな　こ'],
                音読み:['フン'],
            },
            塩: {
                訓読み: ['しお'],
                音読み:['エン'],
            },
        },
        食材２: {
            菜: {
                訓読み: ['な'],
                音読み:['サイ'],
            },
            果: {
                訓読み: ['はーたす　はーてる　はーて'],
                音読み:['カ'],
            },
            豆: {
                訓読み: ['まめ'],
                音読み:['トウ　ズ'],
            },
            缶: {
                訓読み: [],
                音読み:['カン'],
            },
        },
        単位: {
            杯: {
                訓読み: ['さかずき'],
                音読み:['ハイ'],
            },
            枚: {
                訓読み: [],
                音読み:['マイ'],
            },
            匹: {
                訓読み: ['ひき'],
                音読み:['ヒツ'],
            },
            量: {
                訓読み: ['はかーる'],
                音読み:['リョウ'],
            },
        },
    },
}

export default characters;