import axios from 'axios'
import React, { Component, } from 'react'
import CategoryNewsBox from './categoryNewsBox/CategoryNewsBox'
import './categoryNewsBox/categoryNewsBox.css'


const categories = ['business', 'science', 'technology', 'sports', 'health', 'entertainment']
const cors_uri2 = 'https://api.allorigins.win/get?url='
const cors_uri = 'https://cors-anywhere.herokuapp.com/'
const key = 'pub_116372cfc513aa03e2c5a75098d27b49d736'


export default class CategoriseSection extends Component {
    constructor() {
        super();
        this.state = {
            categoriseNews: {
                'business': [
                    {
                        "title": "Equity MFs' net inflows falls sharply to Rs 8,667 cr in August: AMFI",
                        "link": "https://www.sentinelassam.com/business/equity-mfs-net-inflows-falls-sharply-to-rs-8667-cr-in-august-amfi-553983",
                        "keywords": [
                            "Business,More"
                        ],
                        "creator": [
                            "Sentinel Digital Desk"
                        ],
                        "video_url": null,
                        "description": "The mutual fund industry witnessed a big upturn in investor preference for schemes with inflows into equity-linked MFs falling sharply from Rs 22,583 crore in July 2021 to around Rs 8,677 crore in August, the latest monthly data released by the Association of Mutual Funds of India (AMFI) showed.",
                        "content": "MUMBAI: The mutual fund industry witnessed a big upturn in investor preference for schemes with inflows into equity-linked MFs falling sharply from Rs 22,583 crore in July 2021 to around Rs 8,677 crore in August, the latest monthly data released by the Association of Mutual Funds of India (AMFI) showed.The sharp decline could be attributable to launch of a number of large equity-oriented schemes (new fund offers) in July as compared to August. But the fall has been much starker for debt-oriented funds and schemes where net inflows in August reduced to a mere Rs 1,074 crore in comparison to Rs 73,694 crore inflows seen in July. This is largely on account of increased influx in liquid and market funds where money keeps moving in and out at frequent intervals. The inflows into index funds including Gold ETFs, however saw a marginal increase in August to Rs 11,592 crore, higher from previous month's inflows of around Rs 10,000 crore. \"Overall positive flows in the open-ended MF schemes and market indices touching all-time high, helped the Indian MF Industry Net AUMs (asset under management) to breach record Rs 36 lakh crore milestone in August 2021. \"Retail AUM at Rs 17.15 lakh crore, almost half of total industry AUMs, SIP AUMs at record high Rs 5.26 lakh crore, which now forms a third of Retail AUM, healthy rise in SIP accounts at record Rs 4.32 crore and monthly SIP contribution at an all-time high at Rs 9,923.15 crore is reflective of established and rising retail preference towards mutual funds as a long-term wealth creation avenue,\" said AMFI Chief Executive N.S. Venkatesh. (IANS) Also Read: Afghan setup throws up more queries than answersAlso Watch:",
                        "pubDate": "2021-09-09 03:41:55",
                        "image_url": "https://assets.sentinelassam.com/h-upload/2021/09/09/253619-mutaulsbig8sep2021.jpg",
                        "source_id": "sentinel"
                    },
                    {
                        "title": "Cabinet approves hike in MSP for all mandated Rabi crops",
                        "link": "https://www.sentinelassam.com/business/cabinet-approves-hike-in-msp-for-all-mandated-rabi-crops-553980",
                        "keywords": [
                            "Business,More"
                        ],
                        "creator": [
                            "Sentinel Digital Desk"
                        ],
                        "video_url": null,
                        "description": "The Cabinet Committee on Economic Affairs (CCEA) on Wednesday approved an increase in the Minimum Support Prices (MSP) for all the mandated Rabi crops for the Rabi Marketing Season (RMS) 2022-23 with an aim to realign the MSPs in favour of oilseeds, pulses and coarse cereals.",
                        "content": "NEW DELHI: The Cabinet Committee on Economic Affairs (CCEA) on Wednesday approved an increase in the Minimum Support Prices (MSP) for all the mandated Rabi crops for the Rabi Marketing Season (RMS) 2022-23 with an aim to realign the MSPs in favour of oilseeds, pulses and coarse cereals.This has been done to encourage the farmers to shift to larger area under these crops and adopt best technologies and farm practices to correct demand-supply imbalance, a Cabinet release said. The government has increased the MSP of Rabi crops for RMS 2022-23 to ensure remunerative prices for the growers for their produce. The highest absolute increase in MSP over the previous year has been recommended for lentil (Masur), rapeseeds and mustard (Rs 400 per quintal each), followed by gram (Rs 130 per quintal). In case of safflower, there has been an increase of Rs 114 per quintal in comparison to last year. The differential remuneration is aimed at encouraging crop diversification. The increase in MSP for Rabi crops for RMS 2022-23 is in line with the Union Budget 2018-19 announcement of fixing the MSPs at a level of at least 1.5 times the all-India weighted average cost of production, aiming a reasonably fair remuneration for the farmers. \"The expected returns to farmers over their cost of production are estimated to be highest in case of wheat and rapeseed and mustard (100 per cent each), followed by lentil (79 per cent), gram (74 per cent), barley (60 per cent) and safflower (50 per cent),\" the Cabinet release said. Additionally, the National Mission on Edible Oils-Oil Palm (NMEO-OP), the centrally sponsored scheme recently announced by the government, will help increase the domestic production of edible oils and reduce imports dependency. \"With the total outlay of Rs 11,040 crore, the scheme will not only aid in expanding area and productivity of the sector, but also benefit the farmers by increasing their income and generation of additional employment,\" the release said. The Umbrella Scheme, Pradhan Mantri Annadata Aay SanraksHan Abhiyan (PM-AASHA), announced by the government in 2018 will aid in providing remunerative return to the farmers for their produce. The scheme consists of three sub-schemes, i.e., Price Support Scheme (PSS), Price Deficiency Payment Scheme (PDPS), and Private Procurement & Stockist Scheme (PPSS), the release added. (IANS)Also Read: Afghan setup throws up more queries than answers Also Watch:",
                        "pubDate": "2021-09-09 03:39:49",
                        "image_url": "https://assets.sentinelassam.com/h-upload/2021/09/09/253618-rabi-crops.jpg",
                        "source_id": "sentinel"
                    },
                    {
                        "title": "Sensex tad down amid choppy trade; telecom stocks rise",
                        "link": "https://www.sentinelassam.com/business/sensex-tad-down-amid-choppy-trade-telecom-stocks-rise-553979",
                        "keywords": [
                            "Business,More"
                        ],
                        "creator": [
                            "Sentinel Digital Desk"
                        ],
                        "video_url": null,
                        "description": "The key Indian equity indices traded on a subdued note on Wednesday morning.",
                        "content": "MUMBAI: The key Indian equity indices traded on a subdued note on Wednesday morning.The indices were pulled lower by the fall in shares of index-heavyweights Infosys and Tata Consultancy Services. Around 10.20 a.m., Sensex was trading at 58,230.99, lower by 48.49 points or 0.08 per cent from its previous close of 58,279.48. It opened at 58,350.56 and has so far touched an intraday high 58,372.94 and a low of 58,169.36 points. The Nifty50 on the National Stock Exchange was trading at 17,345.45, higher by 16.65 points or 0.1 per cent from its previous close. However, bucking the subdued telecom stocks rose amid hopes of a relief package. The Union Cabinet is expected to discuss relief measures for the stressed sector on Wednesday. Shares of Bharti Airtel on the BSE have touched a 52-week high of Rs 684 per share. Vodafone Idea shares surged 4.7 per cent to Rs 8.67 per share. (IANS) Also Read: Afghan setup throws up more queries than answersAlso Watch:",
                        "pubDate": "2021-09-09 03:36:46",
                        "image_url": "https://assets.sentinelassam.com/h-upload/2021/09/09/253615-untitled-4-copy-2.jpg",
                        "source_id": "sentinel"
                    },
                    {
                        "title": "Thai consumer confidence at record low in August on virus curbs",
                        "link": "https://www.channelnewsasia.com/business/thai-consumer-confidence-record-low-august-virus-curbs-2165781",
                        "keywords": null,
                        "creator": null,
                        "video_url": null,
                        "description": null,
                        "content": null,
                        "pubDate": "2021-09-09 03:34:19",
                        "image_url": "https://onecms-res.cloudinary.com/image/upload/s--3_Gk5sLK--/c_fill%2Ch_900%2Cw_1600/fl_relative%2Cg_south_east%2Cl_one-cms:core:watermark:reuters%2Cw_0.1/f_auto%2Cq_auto/v1/one-cms/core/2021-09-09t033047z_1_lynxmpeh8803i_rtroptp_3_thailand-economy-gdp.jpg?itok=B9j3mz3r",
                        "source_id": "channelnewsasia"
                    },
                    {
                        "title": "Retail Digs A Hole To China - Concerning Some Investors And Economists",
                        "link": "https://www.forbes.com/sites/rickhelfenbein/2021/09/08/retail-digs-a-hole-to-chinaconcerning-some-investors-and-economists/",
                        "keywords": [
                            "Retail",
                            "/retail",
                            "Business",
                            "/business",
                            "Retail",
                            "/retail"
                        ],
                        "creator": [
                            "Rick Helfenbein",
                            " Contributor"
                        ],
                        "video_url": null,
                        "description": "Pundits say the two-thirds of our USA GDP is related to consumer spending, but what if our retail shelves were barren in Q4 and beyond? Are we pushing too hard against China?",
                        "content": "Pundits say the two-thirds of our USA GDP is related to consumer spending, but what if our retail shelves were barren in Q4 and beyond? Are we pushing too hard against China?",
                        "pubDate": "2021-09-09 03:30:33",
                        "image_url": "https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https://specials-images.forbesimg.com/imageserve/61394d832761a7518a3a4ece/0x0.jpg",
                        "source_id": "forbes"
                    },
                    {
                        "title": "South African Exchange Sets New Crypto Withdrawal Limits — Restrictions ‘a Deterrent for Illicit Actors’",
                        "link": "https://news.bitcoin.com/south-african-exchange-sets-new-crypto-withdrawal-limits-restrictions-a-deterrent-for-illicit-actors/",
                        "keywords": [
                            "Exchanges",
                            "Binance",
                            "Bitcoin withdrawals",
                            "Crypto Ecosystem",
                            "Cryptocurrency Exchange",
                            "financial crimes",
                            "Financial Intelligence Centre Act",
                            "luno",
                            "Marius Reitz"
                        ],
                        "creator": [
                            "Terence Zimwara"
                        ],
                        "video_url": null,
                        "description": "One of South Africa’s biggest cryptocurrency exchanges, Luno, has confirmed that it has started restricting withdrawals by clients. The exchange insists the limits are meant to “act as a deterrent for illicit actors moving large amounts of funds within the crypto ecosystem.” Transfers From Luno to Binance Blocked However, despite this acknowledgement, Luno has so […]",
                        "content": "One of South Africa’s biggest cryptocurrency exchanges, Luno, has confirmed that it has started restricting withdrawals by clients. The exchange insists the limits are meant to “act as a deterrent for illicit actors moving large amounts of funds within the crypto ecosystem.” Transfers From Luno to Binance Blocked However, despite this acknowledgement, Luno has so far refused to explain how the exchange sets the so-called “dynamic risk-based limits.” According to a report, the limits — which are separate from the send limits that appear on Luno’s website — were discovered by one of the exchange’s clients. The discovery became apparent to the client when their attempt to transfer crypto assets from a Luno account to a Binance wallet failed. When approached for answers, Luno explained to the client(s) that the limits had been imposed in order to “protect our customers and in an effort to comply with best practices in anti-financial crime and anti-fraud.” Furthermore, the exchange told the client that “the limits are dynamic in nature and are calculated based on our overall customer risk scoring, the limits may differ from customer to customer.” However, Luno told to the affected client that the exchange “does not disclose how [the] send limits are calculated on an individual level.” if (!window.GrowJs) { (function () { var s = document.createElement('script'); s.async = true; s.type = 'text/javascript'; s.src = 'https://bitcoinads.growadvertising.com/adserve/app'; var n = document.getElementsByTagName(\"script\")[0]; n.parentNode.insertBefore(s, n); }()); } var GrowJs = GrowJs || {}; GrowJs.ads = GrowJs.ads || []; GrowJs.ads.push({ node: document.currentScript.parentElement, handler: function (node) { var banner = GrowJs.createBanner(node, 31, [300, 250], null, []); GrowJs.showBanner(banner.index); } }); Luno Customers Unable to Influence Their Risk Score In the meantime, the report quotes Marius Reitz, general manager for Luno Africa, explaining why and how the wider concept of a risk-based approach is being used to determine the limits for each client. He said: As part of the wider concept of a risk-based approach mentioned, for instance in the Financial Intelligence Centre Act (FICA), customer risk profiles are designed and scored based on a multitude of different data points. Reitz adds that while customers are not in a position to influence their risk score, they can still “optimise their risk position by keeping their account information up to date, enabling safety features on their account, and generally keeping their account secure.” When asked about speculation that the exchange has started implementing these dynamic risk-based limits at the request of the financial surveillance department (Finsurv), Reitz denied this. Instead, the general manager asserts that Luno is doing this because the exchange “takes the utmost care to keep our financial crime measures as confidential as possible to ensure they remain effective.” What are your thoughts about this story? You can share your views in the comments section below.",
                        "pubDate": "2021-09-09 03:30:31",
                        "image_url": null,
                        "source_id": "bitcoin"
                    },
                    {
                        "title": "Xinhua Silk Road: China international services trade fair concluded on Tuesday with fruitful results achieved",
                        "link": "https://www.prnewswire.com:443/news-releases/xinhua-silk-road-china-international-services-trade-fair-concluded-on-tuesday-with-fruitful-results-achieved-301372055.html",
                        "keywords": [
                            "Internet Technology",
                            "Publishing & Information Services",
                            "Banking & Financial Services",
                            "Telecommunications Industry",
                            "Cloud Computing/Internet of Things",
                            "PUB",
                            "FIN",
                            "IOT",
                            "ITE",
                            "TLS"
                        ],
                        "creator": null,
                        "video_url": null,
                        "description": "BEIJING, Sept. 8, 2021 /PRNewswire/ -- The six-day 2021 China International Fair for Trade in Services (CIFTIS) concluded on Tuesday in Beijing, with fruitful achievements made during this year's event. Preliminary data showed that a total of 1,672 documents in various fields were inked...",
                        "content": null,
                        "pubDate": "2021-09-09 03:25:00",
                        "image_url": "https://mma.prnewswire.com/media/1611632/image1.jpg?p=original",
                        "source_id": "cision"
                    },
                    {
                        "title": "Japan to extend virus emergency until end of month",
                        "link": "https://ca.finance.yahoo.com/news/japan-extend-virus-emergency-until-032036229.html",
                        "keywords": null,
                        "creator": null,
                        "video_url": null,
                        "description": null,
                        "content": null,
                        "pubDate": "2021-09-09 03:20:36",
                        "image_url": null,
                        "source_id": "yahoo"
                    },
                    {
                        "title": "Gold rates today in Hyderabad, Bangalore, Kerala, Visakhapatnam slashes - 09 September 2021",
                        "link": "https://www.thehansindia.com/business/gold-rates-today-in-hyderabad-bangalore-kerala-visakhapatnam-slashes-09-september-2021-705705",
                        "keywords": [
                            "Business"
                        ],
                        "creator": [
                            "Pavan Kumar Bandari"
                        ],
                        "video_url": null,
                        "description": "Gold rates today, 09 September 2021: Gold rates today in Hyderabad are at Rs. 44,100 per 10 grams of 22-carat.",
                        "content": "Gold rates today in HyderabadGold rates today in HyderabadGold rates today, 08 September 2021: Gold rates today have slashed at all major cities in Hyderabad, Bangalore, Kerala, and Visakhapatnam. The Gold rates in Bangalore city for 10 grams of 22-carat is closed at Rs. 44,100 with a fall of Rs. 300 and the gold rates of 10 grams of 24-carat are at Rs. 48,110 with a fall of Rs 330. The gold rates in Hyderabad are holding at Rs 44,100 per 10 gram of 22-carat with a fall of Rs. 300 and 10 grams of 24-carat gold is at Rs. 48,110 with a fall of Rs. 330. Gold rates in Kerala per 10 gram of 22-carat are at Rs. 44,100 with fall of Rs. 300 and the gold rate of 10 grams of 24 carats is at Rs. 48,110 with a fall of Rs. 330. The gold rates in Visakhapatnam followed the same trends with Rs. 44,100 per 10 gram of 22 carats with a slash of Rs. 300 and 10 grams of 24 carat gold is at Rs. 48,110 with a fall of Rs. 330 On the other hand, silver rates in Hyderabad and Visakhapatnam per one kg have been at Rs. 69,100 and at Bangalore and Kerala and silver rates closed at Rs 64,800. The gold rates in global markets have been lower amid the rise in the US Dollar while in India, after the lifting of the lockdown, the gold rate has been increased. Gold rates across the major cities Hyderabad, Bangalore, Kerala, and Visakhapatnam. City 22 carat Gold (10gms) 24 carat Gold (10gms) silver (1kg) Bangalore Rs. 44,100 Rs. 48,110 Rs.69,100 Hyderabad Rs. 44,100 Rs. 48,110 Rs.64,800 Kerala Rs. 44,100 Rs. 48,110 Rs.69,100 Visakhapatnam Rs. 44,100 Rs. 48,110 Rs.64,800 Investment in gold in Hyderabad While investing in gold in Hyderabad, there is a slight hesitation about buying gold, pearls, or precious jewellery. However, the people of Hyderabad can opt for the jewellery of various designs in myriad colours, followed by Bars and coins where there could be a good margin. On the other hand, the people who have budget constraints can opt for periodic investments by going on an installment basis for 11 months.",
                        "pubDate": "2021-09-09 03:15:18",
                        "image_url": "https://assets.thehansindia.com/h-upload/2021/08/25/500x300_1104022-gold-prices.jpg",
                        "source_id": "thehansindia"
                    },
                    {
                        "title": "Gloss comes off Gold Road Resources’ Gruyere as profit slides 19pc in first half",
                        "link": "https://thewest.com.au/business/mining/gloss-comes-off-gold-road-resources-gruyere-as-profit-slides-19pc-in-first-half-ng-b881999282z",
                        "keywords": null,
                        "creator": [
                            "Stuart McKinnon"
                        ],
                        "video_url": null,
                        "description": "Duncan Gibbs-led Gold Road Resources has posted a 19 per cent dip in profit for the first six months of 2021 but expects a stronger second half.",
                        "content": null,
                        "pubDate": "2021-09-09 03:15:00",
                        "image_url": "https://images.thewest.com.au/publication/B881999282Z/1631157345277_G1B3FCBE9.1-2.jpg",
                        "source_id": "thewest"
                    }
                ]
            }
        }
    }
    //https://newsdata.io/api/1/news?language=en&category=technology

    componentDidMount() {
        // categories.forEach(cat => {
        //     axios.get(cors_uri + 'https://newsdata.io/api/1/news?apiKey=pub_116372cfc513aa03e2c5a75098d27b49d736&language=en&category=' + cat)
        //         .then(res => {
        //             // this.setState(prevState => ({ ...prevState, [cat]: JSON.parse(res.data.contents) }))
        //             this.setState({ categoriseNews: { ...this.state.categoriseNews, [cat]: JSON.parse(res.data.contents).results } })
        //             // this.setState({ categoriseNews: { ...this.state.categoriseNews, [cat]: res.data.results } })
        //         })
        //         .catch(err => console.log(err.response))
        // })
    }
    render() {
        console.log(this.state.categoriseNews)
        return (
            <div>
                {
                    Object.entries(this.state.categoriseNews).map(([key, arr]) => {
                        return <div key={key} className="cat-ns-container">
                            <div className="cat-ns-head">
                                <h1>{key}</h1>
                                <span><a href="/">See More</a></span>
                            </div>
                            <hr />
                            <div className="cat-ns-list">
                                {
                                    arr.slice(0,5).map(item => <CategoryNewsBox data={item} />)
                                }

                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}


