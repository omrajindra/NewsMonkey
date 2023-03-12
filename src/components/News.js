import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "cnn", name: "CNN" },
      author: "David McKenzie, Ghazi Balkiz",
      title:
        "The US helped prevent AIDS from being a death sentence in Africa. Now the epidemic is at a crossroads - CNN",
      description:
        "Fourteen-year-old Philasande Dayimani carries a burden that no child should carry. Last year, she started getting sores in her mouth and struggled to breathe. She says a clinic doctor told her to test for HIV.",
      url: "https://www.cnn.com/2023/03/11/africa/aids-epidemic-crossroads-africa-intl-cmd/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230309145730-03-pepfar.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-03-11T11:59:00Z",
      content:
        "Tembisa, South AfricaCNN\r\n  — \r\nFourteen-year-old Philasande Dayimani carries a burden that no child should carry.\r\nLast year, she started getting sores in her mouth and struggled to breathe. She say… [+11287 chars]",
    },
    {
      source: { id: null, name: "Cointelegraph" },
      author: "William Suberg",
      title:
        "Bitcoin price spikes to '$26K' in USDC terms — How high can the BTC short squeeze go? - Cointelegraph",
      description:
        "Bitcoin brushes aside USDC depeg as BTC price returns above $20,000.",
      url: "https://cointelegraph.com/news/bitcoin-price-spikes-to-26k-in-usdc-terms-how-high-can-the-btc-short-squeeze-go",
      urlToImage:
        "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-03/37599472-501f-4a9c-9bd2-fb255d452d9c.jpg",
      publishedAt: "2023-03-11T11:23:30Z",
      content:
        "Bitcoin (BTC) refused to let $20,000 support die for good on March 11 as the weekend opened to a battle for lost ground.\r\nBTC/USD 1-hour candle chart (Bitstamp). Source: TradingView\r\nBitcoin shakes o… [+3025 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Silicon Valley Bank's demise began with downgrade threat - Reuters",
      description:
        'In the middle of last week, Moody\'s Investors Service Inc delivered alarming news to SVB Financial Group <a href="https://www.reuters.com/companies/SIVB.O" target="_blank">(SIVB.O)</a>, the parent of Silicon Valley Bank: the ratings firm was preparing to down…',
      url: "https://www.reuters.com/markets/us/silicon-valley-banks-demise-began-with-downgrade-threat-sources-2023-03-11/",
      urlToImage:
        "https://www.reuters.com/resizer/uc7qHwEDe_abmGgXxIcnDXxvL9E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WBALK7NZ6NKQDBX43FU42UWJKA.jpg",
      publishedAt: "2023-03-11T11:14:00Z",
      content:
        "March 11 (Reuters) - In the middle of last week, Moody's Investors Service Inc delivered alarming news to SVB Financial Group (SIVB.O), the parent of Silicon Valley Bank: the ratings firm was prepari… [+4315 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Jake Kanter",
      title:
        "ANOTHER BBC Sports Show Benched Today After Presenter And Pundits Boycott In Support Of Lineker - Deadline",
      description:
        "The BBC’s Premier League output is in freefall as mutinous presenters and pundits stage a protest over the suspension of Gary Lineker. The British broadcaster took the unprecedented step of standin…",
      url: "https://deadline.com/2023/03/bbc-football-focus-pulled-presenter-pundits-boycott-support-gary-lineker-1235285804/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/03/1_Mat-wich-of-the-Day-201617.jpg?w=1024",
      publishedAt: "2023-03-11T11:04:00Z",
      content:
        "The BBC’s Premier League output is in freefall as mutinous presenters and pundits stage a protest over the suspension of Gary Lineker.\r\nThe British broadcaster took the unprecedented step of standing… [+3862 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: "Brett Samuels",
      title:
        "Trump indictment? Possibility throws wrench into campaign plans - The Hill",
      description:
        "Former President Trump is reportedly on the brink of facing charges related to a hush money payment during the 2016 campaign, throwing a wrench into the nascent 2024 GOP presidential primary.  Trump has already said in interviews that he plans to continue his…",
      url: "https://thehill.com/homenews/campaign/3894566-trump-indictment-possibility-throws-wrench-into-campaign-plans/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2023/03/trumpdonald_030423gn37_w.jpg?w=1280",
      publishedAt: "2023-03-11T11:00:00Z",
      content:
        "Skip to content\r\nFormer President Trump is reportedly on the brink of facing charges related to a hush money payment during the 2016 campaign, throwing a wrench into the nascent 2024 GOP presidential… [+5890 chars]",
    },
    {
      source: { id: null, name: "MLB.com" },
      author: "Will Leitch",
      title:
        "What to watch for in all 8 World Baseball Classic games Saturday - MLB.com",
      description:
        "Because of the time zone issues that come with hosting an event in multiple hemispheres, the World Baseball Classic, so far, has had a staggered schedule. Pools A and B, in Taichung and Tokyo, respectively, have already had each of its teams play at least two…",
      url: "https://www.mlb.com/news/full-day-of-world-baseball-classic-pool-play-games",
      urlToImage:
        "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/htytyhqfyuoutnouetcr.jpg",
      publishedAt: "2023-03-11T10:59:16Z",
      content:
        "Because of the time zone issues that come with hosting an event in multiple hemispheres, the World Baseball Classic, so far, has had a staggered schedule. Pools A and B, in Taichung and Tokyo, respec… [+5934 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Kelsey Ables, Ellen Francis",
      title:
        "Russia-Ukraine war news: Nationwide outages continue after barrage - The Washington Post",
      description:
        "Fighting was escalating in the eastern city of Bakhmut, while the cities of Kharkiv and Kyiv worked to restore power supply.",
      url: "https://www.washingtonpost.com/world/2023/03/11/russia-ukraine-war-news/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WMFE6F7ZJBH5ZHY7XV6POSYB34.JPG&w=1440",
      publishedAt: "2023-03-11T08:31:50Z",
      content:
        "The battle for the eastern city of Bakhmut has not let up. Ukraines deputy defense minister said fighting was escalating, while an aide to President Volodymyr Zelensky sounded an optimistic note abou… [+3349 chars]",
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Mike Wall",
      title:
        "SpaceX Crew-5 astronauts leave the space station after five months in space - Space.com",
      description:
        "Crew Dragon Endurance undocked from the International Space Station at 2:20 a.m. ET on Saturday (March 11).",
      url: "https://www.space.com/spacex-crew-5-depart-international-space-station",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/wzuAbzNg6VTMV8tbSi2fJV-1200-80.jpg",
      publishedAt: "2023-03-11T08:01:24Z",
      content:
        "Update for 3 a.m. March 11: This story has been updated to reflect the latest times from NASA.\r\nSpaceX's Crew-5 astronaut mission for NASA departed the International Space Station on Saturday (March … [+3223 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "2023 March Madness, conference tournament schedules: 13 NCAA Tournament automatic bids on the line Saturday - CBS Sports",
      description:
        "Saturday's conference tournament finals will take a big step in setting the field of 68 with 13 teams punching their tickets to the Big Dance",
      url: "https://www.cbssports.com/college-basketball/news/2023-march-madness-conference-tournament-schedules-13-ncaa-tournament-automatic-bids-on-the-line-saturday/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/03/09/5bf8ec79-b0fd-44d7-bf34-be862b564710/thumbnail/1200x675/cce0c5e85c8ca7818dfc68f68c2dd171/usatsi-20176577-1.jpg",
      publishedAt: "2023-03-11T07:44:00Z",
      content:
        "Saturday is the day before Selection Sunday and is one of the busiest and most drama-filled days of March Madness. No other day can match the 13 conference tournament championship games to be held th… [+5767 chars]",
    },
    {
      source: { id: null, name: "DW (English)" },
      author: "Deutsche Welle",
      title:
        "EU, US to 'immediately' start work on green subsidies deal - DW (English)",
      description:
        "US President Joe Biden and European Commission President Ursula von der Leyen touted a breakthrough in their transatlantic trade dispute over subsidies for the green economy, as well as the war in Ukraine.",
      url: "https://www.dw.com/en/eu-us-to-immediately-start-work-on-green-subsidies-deal/a-64953153",
      urlToImage: "https://static.dw.com/image/64953208_6.jpg",
      publishedAt: "2023-03-11T07:41:25Z",
      content:
        "US President Joe Biden and European Commission President Ursula von der Leyen on Friday agreed to start negotiations that could allow European raw materials to be used as part of an American clean en… [+3141 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Joseph Ataman",
      title:
        "UK to pay $576 million in deal with France to combat illegal immigration - CNN",
      description:
        "The United Kingdom said on Friday it would pay $576 million over the next three years as part of a deal with France to combat illegal immigration across the English Channel.",
      url: "https://www.cnn.com/2023/03/11/europe/uk-france-illegal-immigration-funding-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230310234158-01-sunak-macron-summit-031023.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-03-11T07:35:00Z",
      content:
        "The United Kingdom said on Friday it would pay $576 million over the next three years as part of a deal with France to combat illegal immigration across the English Channel.\r\nThe deal was announced d… [+1813 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Minyvonne Burke and Tim Stelloh",
      title:
        "Podcast host and her husband killed in Washington state by Texas man who stalked the woman, police say - Yahoo! Voices",
      description:
        "A Washington state podcast host and her husband were killed early Friday morning by a truck driver from Texas who had stalked the woman, police said.",
      url: "https://news.yahoo.com/podcast-host-her-husband-killed-172857280.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/9zV76q8ePxXsb8NCHOt6Mg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/nbc_news_122/51f2a192519f03fbc970f2e6483ad4b3",
      publishedAt: "2023-03-11T07:16:00Z",
      content:
        "A Washington state podcast host and her husband were killed early Friday morning by a truck driver from Texas who had stalked the woman, police said.\r\nSpeaking to reporters, Redmond Police Chief Darr… [+2451 chars]",
    },
    {
      source: { id: null, name: "YourTango" },
      author: "Ruby Miranda",
      title:
        "3 Zodiac Signs With 'Lucky In Love' Weekly Horoscopes, March 12 - 18, 2023 - YourTango",
      description:
        "Three zodiac signs are luckiest in love March 12 - 18, 2023, and their weekly horoscopes bring a boost of romance to Cancer, Aquarius, and Pisces.",
      url: "https://www.yourtango.com/2023359570/zodiac-signs-weekly-horoscope-luckiest-love-march-12-18-2023",
      urlToImage:
        "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/luckiest-love-weekly-horoscopes-march-12-18-2023.png?itok=Fe3vqzJv",
      publishedAt: "2023-03-11T06:03:19Z",
      content:
        "Three zodiac signs have 'luckiest in love' weekly horoscopes starting Monday, March 12 - Sunday, March 18, 2023. On this last week of Pisces Sun, we will surely see some groovy situations in love occ… [+4406 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Nolan King",
      title:
        "Bellator 292 results: Former UFC champ Benson Henderson retires after first-round loss to Usman Nurmagomedov - MMA Junkie",
      description:
        "Former UFC and WEC champion Benson Henderson called it a career after he lost quickly to Usman Nurmagomedov at Bellator 292.",
      url: "https://mmajunkie.usatoday.com/2023/03/bellator-292-results-former-ufc-champ-benson-henderson-retires-after-first-round-loss-to-usman-nurmagomedov",
      urlToImage:
        "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/03/Benson-Henderson-retires-Bellator-292.png?w=1024&h=576&crop=1",
      publishedAt: "2023-03-11T05:00:38Z",
      content:
        "Benson Henderson has called it a career.\r\nIt took Usman Nurmagomedov (17-0 MMA, 6-0 BMMA) all of 2:37 to finish Henderson (30-12 MMA, 7-7 BMMA) and defend his Bellator lightweight championship at Bel… [+3050 chars]",
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: "Mike Florio",
      title:
        "David Tepper finally gets in position to solve Carolina’s quarterback problem - NBC Sports",
      description:
        "Panthers owner David Tepper said several years back in the final episode of his team’s turn on the now-defunct All or Nothing series on Amazon that the NFL is set up for every team to cluster around .500, and that the difference comes from having the right qu…",
      url: "https://profootballtalk.nbcsports.com/2023/03/10/david-tepper-finally-gets-in-position-to-solve-carolinas-quarterback-problem/",
      urlToImage:
        "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/03/GettyImages-1246373603-e1678508829694.jpg",
      publishedAt: "2023-03-11T04:38:00Z",
      content:
        "Panthers owner David Tepper said several years back in the final episode of his teams turn on the now-defunct All or Nothing series on Amazon that the NFL is set up for every team to cluster around .… [+2271 chars]",
    },
    {
      source: { id: null, name: "Business Wire" },
      author: null,
      title:
        "Acadia Pharmaceuticals Announces U.S. FDA Approval of DAYBUE™ (trofinetide) for the Treatment of Rett Syndrome in Adult and Pediatric Patients Two Years of Age and Older - Business Wire",
      description:
        "Acadia Pharmaceuticals Inc. (Nasdaq: ACAD) today announced that the U.S. Food and Drug Administration (FDA) has approved DAYBUE™ (trofinetide) for the",
      url: "https://www.businesswire.com/news/home/20230303005382/en/Acadia-Pharmaceuticals-Announces-U.S.-FDA-Approval-of-DAYBUE%E2%84%A2-trofinetide-for-the-Treatment-of-Rett-Syndrome-in-Adult-and-Pediatric-Patients-Two-Years-of-Age-and-Older",
      urlToImage:
        "https://mms.businesswire.com/media/20230303005382/en/1735980/23/ACADIA_V2.jpg",
      publishedAt: "2023-03-11T02:45:00Z",
      content:
        "SAN DIEGO--(BUSINESS WIRE)--Acadia Pharmaceuticals Inc. (Nasdaq: ACAD) today announced that the U.S. Food and Drug Administration (FDA) has approved DAYBUE (trofinetide) for the treatment of Rett syn… [+13227 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Anthony D'Alessandro",
      title:
        "‘Dungeons & Dragons: Honor Among Thieves’ Fires Up SXSW Opening Night - Deadline",
      description:
        "As Dungeons & Dragons: Honor Among Thieves co-director Jonathan Goldstein put it, “nobody had done [an film adaptation of the game] justice.” But Friday night when it came to the ne…",
      url: "https://deadline.com/2023/03/sxsw-dungeons-and-dragons-premiere-1235285322/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/02/dd04504r4.jpg?w=1024",
      publishedAt: "2023-03-11T02:41:00Z",
      content:
        "As Dungeons &amp; Dragons: Honor Among Thieves co-director Jonathan Goldstein put it, “nobody had done [an film adaptation of the game] justice.” But Friday night when it came to the newest big-scree… [+2224 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: "Jared Gans",
      title:
        "Santos denies organizing alleged credit card scam, claims he did nothing ‘of criminal activity’ - The Hill",
      description:
        "Rep. George Santos (R-N.Y.) denied that he has done anything “of criminal activity” on Friday in response to an allegation that he orchestrated a credit card skimming operation in 2017.  CNN reported that Santos told reporters he is “innocent” and that he coo…",
      url: "https://thehill.com/homenews/house/3894885-santos-denies-organizing-alleged-credit-card-scam-claims-he-did-nothing-of-criminal-activity/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2023/03/AP23011794074836-e1678501845989.jpg?w=1280",
      publishedAt: "2023-03-11T02:35:00Z",
      content:
        "Skip to content\r\nRep. George Santos (R-N.Y.) denied that he has done anything “of criminal activity” on Friday in response to an allegation that he orchestrated a credit card skimming operation in 20… [+2082 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Iran, Saudi Arabia agree to resume ties - Reuters",
      description:
        "Iran and Saudi Arabia agreed to re-establish relations after years of hostility that had threatened stability and security in the Gulf and helped fuel confli...",
      url: "https://www.youtube.com/watch?v=KmbAfg2J2fg",
      urlToImage: "https://i.ytimg.com/vi/KmbAfg2J2fg/hqdefault.jpg",
      publishedAt: "2023-03-11T02:30:12Z",
      content: null,
    },
    {
      source: { id: null, name: "Defense One" },
      author: "Marcus Weisgerber",
      title:
        "Biden Ditches Trump's Air Force One Paint Scheme For Classic Blue-and-White - Defense One",
      description: "But the new jets won’t have any polished metal.",
      url: "https://www.defenseone.com/business/2023/03/biden-ditches-trumps-air-force-one-paint-scheme-classic-blue-and-white/383875/",
      urlToImage:
        "https://cdn.defenseone.com/media/img/cd/2023/03/10/VC_25B_Biden_Paint/open-graph.jpg",
      publishedAt: "2023-03-11T01:57:00Z",
      content:
        "Cookie List\r\nA cookie is a small piece of data (text file) that a website when visited by a\r\n user asks your browser to store on your device in order to remember information about you, such as your\r\n… [+4205 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  desciption={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
