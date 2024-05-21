import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NexExpense/NewExpense";
import './App.css';
import Header from "./components/UI/Header";
function App() {
  const Dummy_expenses = [
    {
      id: "1",
      title: "Arc de Triomphe ",
      amount:
        "The Arc de Triomphe in Paris is a monumental arch standing at the western end of the Champs-Élysées.",
      date: new Date(1945, 7, 29),
      category: "monuments",
      pic_url:
        "https://th.bing.com/th/id/OIP.2br-5SiM9CJp2yTHV3d_XQAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: "2",
      title: "Memorial Cemetery",
      amount:
        "The United Nations Memorial Cemetery in Busan, South Korea, inaugurated in 1953, serves as a solemn tribute to soldiers who died during the Korean War.",
      date: new Date(1953, 9, 15),
      category: "monuments",
      pic_url:
        "https://th.bing.com/th/id/OIP.b0BfEhFd5Vuscl6Yr7sBBgHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: "3",
      title: "The O2 Arena",
      amount:
        "The Millennium Dome, now called The O2 Arena, is a landmark in London, inaugurated in 1995.",
      date: new Date(1995, 0, 1),
      category: "monuments",
      pic_url:
        "https://franks-travelbox.com/wp-content/uploads/2017/11/grossbritannien-london-die-o2-arena-wurde-von-richard-rogers-entworfen-am-1-jacc88nner-2000-als-millennium-dome-erocc88ffnet-london-grossbritannien-zsolt-biczo-shutter.jpg",
    },
    {
      id: "4",
      title: "Lincoln Center ",
      amount:
        "The Lincoln Center for the Performing Arts in New York City is a sprawling cultural complex established in 1963.",
      date: new Date(1963, 4, 14),
      category: "monuments",
      pic_url:
        "https://th.bing.com/th/id/OIP.8JhvYGegirDNwOj1hAP3xQAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: "5",
      title: "Steve martin",
      amount:
        "Steve Martin is a versatile American entertainer known for his comedic genius.",
      date: new Date(1945, 7, 14),
      category: "person",
      pic_url:
        "https://th.bing.com/th/id/OIP.6YSjWzpkxMJfl2EL2Ta97QHaE6?rs=1&pid=ImgDetMain",
    },
    {
      id: "6",
      title: "Cybill Shepherd",
      amount:
        "Cybill Shepherd is an American actress and singer known for her versatile talent and captivating performances.",
      date: new Date(1953, 1, 18),
      category: "person",
      pic_url:
        "https://th.bing.com/th/id/OIP.hkZtKLAjay3YRzBMzSdW-AHaK2?rs=1&pid=ImgDetMain",
    },
    {
      id: "7",
      title: "Kendall Jenner",
      amount:
        "Kendall Jenner is an American model and television personality who gained fame through her prominent role in the reality television show Keeping Up with the Kardashians.",
      date: new Date(1995, 10, 3),
      category: "person",
      pic_url:
        "https://th.bing.com/th/id/OIP.5rwobCEJ9xbwIHKTM-_VXQHaLH?rs=1&pid=ImgDetMain",
    },
    {
      id: "8",
      title: "Michael Jordan",
      amount:
        "Michael Jordan, born on February 17, 1963, in Brooklyn, New York, is widely regarded as one of the greatest basketball players of all time.",
      date: new Date(1963, 1, 17),
      category: "person",
      pic_url:
        "https://th.bing.com/th/id/OIP.NpDxUlHChYVtYaow5NGHygHaLz?rs=1&pid=ImgDetMain",
    },
    {
      id: "9",
      title: "World War 2",
      amount:
        "The final year of World War II, which saw significant events such as the dropping of atomic bombs on Hiroshima and Nagasaki, and the surrender of Japan.",
      date: new Date(1945, 8, 2),
      category: "war",
      pic_url:
        "https://th.bing.com/th/id/OIP.5lPRUqQIxNZpYfXpJkYXdgHaGT?rs=1&pid=ImgDetMain",
    },
    {
      id: "10",
      title: "Korean War ",
      category: "war",
      amount:
        "The Korean War ended in 1953 with an armistice agreement, though a formal peace treaty was never signed, leaving the Korean Peninsula divided.",
      date: new Date(1953, 5, 27),
      pic_url:
        "https://th.bing.com/th/id/OIP.UNKdD1Fp5dGA_uP3c5t6IwAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: "11",
      title: "Vietnam War",
      category: "war",
      amount:
        "This conflict involving North Vietnam, supported by communist allies, and South Vietnam, supported by anti-communist allies, continued into 1969.",
      date: new Date(1963, 1, 2),
      pic_url:
        "https://2.bp.blogspot.com/-HeJVAifJN4c/Wa7gtL28uvI/AAAAAAACzYo/hNyJ3pYtqCMQ5W_UBsRhWTuyam3nT4-KwCLcBGAs/s1600/vietnam-war-12.jpg",
    },
    {
      id: "12",
      title: "The Bosnian War",
      category: "war",
      amount:
        "The Bosnian War concluded in 1995 with the signing of the Dayton Agreement, ending the conflict in Bosnia and Herzegovina.",
      date: new Date(1995, 11, 14),
      pic_url:
        "https://th.bing.com/th/id/OIP.osxSm-_HI9Lhh3-d0JccmAHaE2?rs=1&pid=ImgDetMain",
    },
    {
      id: "13",
      title: "Mount Vesuvius",
      category: "monuments",
      amount:
        "Mount Vesuvius, famous for its devastating eruption in 79 AD that buried the ancient cities of Pompeii.",
      date: new Date(1945, 2, 18),
      pic_url:
        "https://th.bing.com/th/id/OIP.NJnUqc9-F8F_pIB_kNh8GgHaEc?rs=1&pid=ImgDetMain",
    },
    {
      id: "14",
      title: "North Sea Flood",
      category: "events",
      amount:
        "This devastating flood occurred in January 1953, primarily affecting the Netherlands and Belgium, causing widespread damage.",
      date: new Date(1953, 0, 31),
      pic_url:
        "https://th.bing.com/th/id/OIP._Ly3mMZo3DfEtc_GNfUPNAHaF8?rs=1&pid=ImgDetMain",
    },
    {
      id: "15",
      title: "Hurricane Flora",
      category: "events",
      amount:
        "This powerful hurricane struck the Caribbean in October 1963, causing widespread devastation and resulting in over 7,000 deaths.",
      date: new Date(1963, 9, 4),
      pic_url:
        "https://th.bing.com/th/id/OIP.7qfQTiDFgRgCzFRgRwzxAgHaFO?rs=1&pid=ImgDetMain",
    },
    {
      id: "16",
      title: "Hanshin Earthquake",
      category: "events",
      amount:
        "A powerful earthquake struck the Hanshin region of Japan on January 17, 1995, causing extensive damage and economic losses.",
      date: new Date(1995, 0, 17),
      pic_url:
        "https://i1.wp.com/hyogojapan.com/wp-content/uploads/2019/01/c011.jpg?w=1000&ssl=1",
    },
    {
      id: "17",
      title: "Nelson Mandela Released",
      category: "events",
      amount:
        "Nelson Mandela was released from prison on February 11, 1990, after 27 years of imprisonment, marking a pivotal moment in South African history.",
      date: new Date(1990, 1, 11),
      pic_url:
        "https://th.bing.com/th/id/OIP.ZJ98ct1c7hGA7Yld88TB6gHaE9?rs=1&pid=ImgDetMain",
    },
    {
      id: "18",
      title: "Berlin Wall Falls",
      category: "events",
      amount:
        "The Berlin Wall, which had divided East and West Berlin since 1961, fell on November 9, 1989, leading to German reunification.",
      date: new Date(1989, 10, 9),
      pic_url:
        "https://app.abcnews.go.com/images/International/berlin-wall-cp-01-as-191029_sl_22x15_1600.jpg",
    },
    {
      id: "19",
      title: "Apollo 11 Moon Landing",
      category: "events",
      amount:
        "On July 20, 1969, Apollo 11 successfully landed the first humans on the Moon, with astronauts Neil Armstrong and Buzz Aldrin taking historic steps.",
      date: new Date(1969, 6, 20),
      pic_url:
        "https://th.bing.com/th/id/OIP.fwCxaUS6DhhSJ7X4mZ50wwHaFw?rs=1&pid=ImgDetMain/OIP.kd8ISABXphUqGV9TKhZC1QHaFJ?pid=ImgDet&rs=1",
    },
    {
      id: "20",
      title: "Fall of the Soviet Union",
      category: "events",
      amount:
        "The Soviet Union officially dissolved on December 26, 1991, marking the end of the Cold War and the beginning of a new era in world politics.",
      date: new Date(1991, 11, 26),
      pic_url:
        "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/6/7/1402175658903/04bc9079-3377-4616-9083-8753466d9c7f-2060x1356.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=d16d8721beb1bd00c4d5dd19142b8f7b",
    },
    {
      id: "21",
      title: "Hubble Space Telescope Launched",
      category: "events",
      amount:
        "The Hubble Space Telescope was launched into low Earth orbit on April 24, 1990, revolutionizing our understanding of the universe.",
      date: new Date(1990, 3, 24),
      pic_url:
        "https://th.bing.com/th/id/OIP.SpGUKZtrVgibRX00rwxpeAHaFj?rs=1&pid=ImgDetMain",
    },
    {
      id: "22",
      title: "Chernobyl Disaster",
      category: "events",
      amount:
        "The Chernobyl nuclear disaster occurred on April 26, 1986, in Ukraine, resulting in catastrophic radiation release and long-term environmental impact.",
      date: new Date(1986, 3, 26),
      pic_url:
        "https://th.bing.com/th/id/R.bc9f29d010152f5d2f36bc0a6d181d63?rik=YS92o3uraaGBDA&riu=http%3a%2f%2fwww.thenation.com%2fwp-content%2fuploads%2f2015%2f05%2fchernobyl_cleanup_ap_img.jpg&ehk=aK3z1T%2ffBqTL1OGowEupR8iAAIO3tTpMDHItQlK0Viw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: "23",
      title: "9/11 Attacks",
      category: "events",
      amount:
        "On September 11, 2001, terrorist attacks on the World Trade Center and the Pentagon resulted in significant loss of life and global impact.",
      date: new Date(2001, 8, 11),
      pic_url:
        "https://th.bing.com/th/id/OIP.bRs1erbHz6_UzJ4iYarmPgAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: "24",
      title: "Indian Ocean Tsunami",
      category: "events",
      amount:
        "The Indian Ocean tsunami on December 26, 2004, caused by a massive undersea earthquake, led to widespread devastation across multiple countries.",
      date: new Date(2004, 11, 26),
      pic_url:
        "https://th.bing.com/th/id/OIP.ky-JXXvfdP71Sci1zusW-wHaE0?rs=1&pid=ImgDetMain",
    },
    {
      id: "25",
      title: "Hurricane Katrina",
      category: "events",
      amount:
        "Hurricane Katrina struck the Gulf Coast of the United States in August 2005, causing extensive damage and flooding, particularly in New Orleans.",
      date: new Date(2005, 7, 29),
      pic_url:
        "https://th.bing.com/th/id/OIP.50-Rvvst8nZFDAoY79ZqhgHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: "26",
      title: "Fukushima Nuclear Disaster",
      category: "events",
      amount:
        "The Fukushima Daiichi nuclear disaster occurred on March 11, 2011, following a massive earthquake and tsunami, leading to significant radiation release.",
      date: new Date(2011, 2, 11),
      pic_url:
        "https://static01.nyt.com/images/2016/03/01/world/01Japan-web/01Japan-web-superJumbo.jpg",
    },
    {
      id: "27",
      title: "COVID-19 Pandemic",
      category: "events",
      amount:
        "The COVID-19 pandemic, caused by the novel coronavirus SARS-CoV-2, began in 2019 and led to global health and economic crises.",
      date: new Date(2019, 11, 1),
      pic_url:
        "https://th.bing.com/th/id/OIP.GajoLJbcke8vF5XWZecdJAHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: "33",
      title: "Oklahoma City Bombing",
      category: "events",
      amount:
        "The Oklahoma City bombing occurred on April 19, 1995, when a truck bomb exploded outside the Alfred P. Murrah Federal Building, killing 168 people.",
      date: new Date(1995, 3, 19),
      pic_url:
        "https://static01.nyt.com/images/2020/04/18/us/00oklahoma-BombingAnniversary--2/00oklahoma-BombingAnniversary--2-superJumbo.jpg?quality=90&auto=webp",
    },
    {
      id: "34",
      title: "Windows 95 Released",
      category: "events",
      amount:
        "Microsoft released Windows 95, a major upgrade to the Windows operating system, on August 24, 1995.",
      date: new Date(1995, 7, 24),
      pic_url:
        "https://th.bing.com/th/id/OIP.bcV7vAgHn76vf52kUF13bAHaEo?rs=1&pid=ImgDetMain",
    },
    {
      id: "35",
      title: "Toy Story Premieres",
      category: "events",
      amount:
        "Toy Story, the first entirely computer-animated feature film, premiered on November 22, 1995, marking a milestone in animation history.",
      date: new Date(1995, 10, 22),
      pic_url: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    },
    {
      id: "36",
      title: "Srebrenica Massacre",
      category: "events",
      amount:
        "The Srebrenica massacre, during the Bosnian War, occurred in July 1995, resulting in the killing of more than 8,000 Bosniak men and boys.",
      date: new Date(1995, 6, 11),
      pic_url:
        "https://static01.nyt.com/images/2016/07/12/world/071216-bosnia-ss-slide-MTS8/071216-bosnia-ss-slide-MTS8-superJumbo.jpg?quality=75&auto=webp&disable=upscale",
    },
    {
      id: "37",
      title: "DVD Introduced",
      category: "events",
      amount:
        "The DVD, a new optical disc storage format, was announced in November 1995, promising higher storage capacity than CDs.",
      date: new Date(1995, 10, 1),
      pic_url:
        "https://th.bing.com/th/id/OIP.bgn37sRmKgLR8502JY5NJQHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: "38",
      title: "Ebola Outbreak in Zaire",
      category: "events",
      amount:
        "An Ebola outbreak occurred in Kikwit, Zaire (now the Democratic Republic of the Congo), in May 1995, resulting in over 250 deaths.",
      date: new Date(1995, 4, 6),
      pic_url:
        "https://static01.nyt.com/newsgraphics/2014/12/30/ebola-outbreaks/4ddf2d539da9e29a43144ed2f3a485a62bff7f30/village.jpg",
    },
    {
      id: "39",
      title: "The Galileo Probe Arrives at Jupiter",
      category: "events",
      amount:
        "NASA's Galileo spacecraft arrived at Jupiter on December 7, 1995, beginning a detailed study of the gas giant and its moons.",
      date: new Date(1995, 11, 7),
      pic_url:
        "https://th.bing.com/th/id/OIP.1VP7Iu8KSSMKZr3VEDGNswHaFn?rs=1&pid=ImgDetMain",
    },
    {
      id: "40",
      title: "The O.J. Simpson Verdict",
      category: "events",
      amount:
        "On October 3, 1995, O.J. Simpson was acquitted of the murders of Nicole Brown Simpson and Ronald Goldman, in a verdict that captivated the nation.",
      date: new Date(1995, 9, 3),
      pic_url:
        "https://th.bing.com/th/id/OIP.2KMx5oHF1_MpA6cn85d_tAHaFG?rs=1&pid=ImgDetMain",
    },
    {
      id: "41",
      title: "Toy Story",
      category: "events",
      amount:
        "The first full-length feature film entirely created using computer-generated imagery, Toy Story, was released by Pixar in 1995.",
      date: new Date(1995, 10, 22),
      pic_url: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    },
    {
      id: "42",
      title: "Ebay Founded",
      category: "events",
      amount:
        "The online auction and shopping website eBay was founded by Pierre Omidyar in September 1995.",
      date: new Date(1995, 8, 3),
      pic_url:
        "https://static.ebayinc.com/static/assets/Uploads/Timeline/LD1-OurHistory-Mobile-1995-2000-14.jpg",
    },
    {
      id: "43",
      title: "Yahoo! Founded",
      category: "events",
      amount:
        "Yahoo! was incorporated on March 2, 1995, by Jerry Yang and David Filo, and it quickly became one of the most popular web portals.",
      date: new Date(1995, 2, 2),
      pic_url:
        "https://th.bing.com/th/id/OIP.09yD05dKRgYGjkiU4ao6NgHaFD?rs=1&pid=ImgDetMain",
    },
    {
      id: "44",
      title: "End of World War II",
      category: "events",
      amount:
        "World War II officially ended on September 2, 1945, with the signing of the Japanese Instrument of Surrender aboard the USS Missouri.",
      date: new Date(1945, 8, 2),
      pic_url:
        "https://th.bing.com/th/id/OIP.qcIVou1KfbY5RcUUApYUBgAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: "45",
      title: "United Nations Established",
      category: "events",
      amount:
        "The United Nations was established on October 24, 1945, following the end of World War II, to promote international cooperation and peace.",
      date: new Date(1945, 9, 24),
      pic_url:
        "https://th.bing.com/th/id/OIP.1dYNiT8IJ3F3cKSDhIEK8gHaDV?rs=1&pid=ImgDetMain",
    },
    {
      id: "46",
      title: "Nuremberg Trials Begin",
      category: "events",
      amount:
        "The Nuremberg Trials, a series of military tribunals held to prosecute prominent leaders of Nazi Germany, began on November 20, 1945.",
      date: new Date(1945, 10, 20),
      pic_url:
        "https://th.bing.com/th/id/R.5e6b7b91b0b2c6a8baaecd6d54f48b26?rik=KOOKSV14Bz5dKg&riu=http%3a%2f%2fwww.thenation.com%2fwp-content%2fuploads%2f2015%2f11%2fnuremburg_cc_img.jpg&ehk=1QOxlEt2AmGHKKs07M6EDb6rV4q3rl9%2f3AHINpyVmfI%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: "48",
      title: "Korean War Armistice",
      category: "events",
      amount:
        "The Korean War armistice was signed on July 27, 1953, effectively ending the fighting between North and South Korea.",
      date: new Date(1953, 6, 27),
      pic_url:
        "https://th.bing.com/th/id/OIP.JW9rCYetPvAknaviQwh4cQAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: "49",
      title: "Coronation of Queen Elizabeth II",
      category: "events",
      amount:
        "Queen Elizabeth II was crowned on June 2, 1953, marking the beginning of her long and historic reign.",
      date: new Date(1953, 5, 2),
      pic_url:
        "https://th.bing.com/th/id/OIP.-W6dIPkLv7qLSqCeA6hqkgAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: "50",
      title: "The Great Smog of London",
      category: "events",
      amount:
        "In December 1952, the Great Smog of London caused severe air pollution, leading to widespread illness and death.",
      date: new Date(1953, 0, 1), // The effects carried into early 1953
      pic_url:
        "data:image/jpeg;base64,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",
    },
    {
      id: "51",
      title: "John F. Kennedy Assassination",
      category: "events",
      amount:
        "On November 22, 1963, President John F. Kennedy was assassinated in Dallas, Texas, a tragedy that shocked the nation.",
      date: new Date(1963, 10, 22),
      pic_url:
        "https://th.bing.com/th/id/OIP.Dg-cs6g27y4W_XWMey5t0wAAAA?w=284&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: "52",
      title: "March on Washington",
      category: "events",
      amount:
        "The March on Washington for Jobs and Freedom, where Martin Luther King Jr. delivered his 'I Have a Dream' speech, occurred on August 28, 1963.",
      date: new Date(1963, 7, 28),
      pic_url:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0ATkDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAABAACAwUGAQf/xABIEAACAQMDAgQDBQUDCQcFAQABAgMEERIABSETMQYiQVEUYXEjMoGRoRUzQlKxwdHwJENUYnKSk9LhFiVVc4KU8Qc0U6Ky0//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACkRAAICAgIBBAMAAQUAAAAAAAABAhEDIRIxQRMiMlEEYaFCcYGRsdH/2gAMAwEAAhEDEQA/AC497q4pm+JR5Y2NolxSJzexve1uOdWUO9bfIJC7SRGNgpRwGc3NvKF1ijMrK0jOWsMVP37G/F786IiqGWMRhEw6qSuQq3uo4Nzx89c3RNm7hqqeo/cyhrAMRYggfMHU3PvrExVcsZikieZViLnqITl5yMiLjLkcf/OtVRV1NKkt5WKRp1g8xQN07C4bEDlTweNNMdh4v76dz76bG8UigxyIwIBBVgwIN7dtSDVoZwX9z+enc+50hp1tUIbz7nXRf3OnW10DQBwA++nc++lYadbQBzn30ufc6dbSsNAWN/PXeffXba7bRQHAD7nXbN7nTgB667a+qSCxnPz0rH56fbStooLGWOu830+2lbRQWNAPz0ufc6eONLjRQWM59zrlj7nUhGlxpUFjOfc67z7nTtLRQWN/E65z7nT9LjRQ7GWb3Ol5vc6fYaVtKgsaL37nXefc6cANdtphYzze51zn31JbXLDSHZHz76XPvp9tc0hjRl7nXbP7n89d0r6APGSWxYsqoQwDLwcQSbFv1tqUMrqz2HfzBSwBA4P4D10OYKlVPcOqdPzxyDmxIXkE8+n00RRLLUzxoclDRhlsJcCCR5yFBbji/Ivcc6KMicTOCQezEXvwDfn6W9tSM6tGFY+VnFiwIW/c2tY8/wCO2n1VLfpyRxywxhT8QWV8QbAgkP3/ALb6HRlkjdMirKV8qgFSSBbzA3H5f01lQBI3Ctp2RoeqoLiYk2exBxUIRzb3+mtRHvSyPAbSiHpo7t0woklFs40LHgA2sSB3OsZE8ss1o1OUSmTFrlsF7seL8aYtbKHkSMhWCcrIGOUTPmAvJNrgev8ATTSaCz0kbjRdGecswihXN2cBQecSIyx5sbjj24v619f4m2ulMaU7meUyR3shERiKhiQ5I55A7f11kJd3tG1DaJIpPh5pmxLyvJH5lDOxIsDewAt/XQOTSlyceqwDxHA4lV8oNxzf8f6aq3QWehReJdkkCFmqELlQQYwwF+/Kn01HH4p2xpunLFNDGzBYpGKPlzbJgvYfif01gmacrg7C4DMSrW5XtYAc/jqdQ+KZG7oCyl1xJuA1iCbDRbCz1RHjkUPHIjoWKho2VlJAvYEcacPXXmVLVVFPLHKk+EiMMVViVF+GBx457H5fXW723d6StiQSSolSuCSq+KB3ckAxi/Y/poUvDGmWg13XNd1Yzo12x1FNNDTwzTyuipCpZsnVfNiWVLk929PrrIv42qHeT4ajp1RcbJK7PIyg3IJFhc8dtFibNpbXdY2l8ayyzUkc9HAElUK5RnVw7PbJcieB9P8ApqqetoKsJ8PUROzmQLHkBLeMkMDHfLjTsAjS0rH2Ou2+umAtLTgB76RA0Ac0td13jQAw67pxA1zQBzStruloGK2uY6XPppaQHbD21zSudd76AOW0r6hp5+v8QbWEc7xj/ZFram0WAr65ca7rmkArjXDpaWgoab8a5rp1zSA8hr6hJIUCIgkTqIcVZWKkLYY37jv30ymq5II1lYR5YRxgOXzK8gkFO3y59NV4qGqHKtDHECyh+neMlAbkEC/P4abHIMEZha6nIgnzhj/Fc9xzoS1szLiDdaoLLEhkCsBHixYrZfLch7j14Hz06LJikURRMrDBgBkWIFwT+nz1VJURM/USRh5cgCLZhTaygcfTXGgr3YGN5TZlWxQJgstgc37cX9TpcdgWo84lxkBRWkpzIpJJcAlcbd1Pv/gifECOF2MzSTSKoYk4hTe2KsOTj2HpyfbQ8vXpTPSN02qYnjiLg+UAk+ZSSO4sOR6fLQpMrG0hKYK+Rv8Aea1hYqP8X+WqURDpWqUdOooYOM0YkHIE/euvPpqWmlZWVsSFIGTDzeW9i2J/6aYkUjk9TFFKM2eYv5QLBlAuCTxcjTIpSCxBKFEDKCeCUIvx631TEW1TPSjFoWJsllYnJRdmvcOoIJvlb5/LiKjkErlbt5A1iD94gWAYE/rqsNlhSQSK95fMhbzC1iDj7e+p4RIvw1gcpA7HsOS3BBJ0uOgCllPWlJN1zGfnxYk3v5Tzx68asoZVCKVbtcgA+a3Gqxo2eZnkZMmBV0IIPl44Pb/51PCUKTKWeyrYkm7et+wvxrOasD0PZ92p54Io5ZoYyscKRLI1pWsLENfyntx/i8m8b/RbRDExJllmV+msZUY+W6yMWBW3ytrz2mqeVjRgFUAK4uOoORiLnQu4GV5wJmYwWV0Y2LIptlgCQDb1F9EbumVyYRXbrV7hJPPPIVNZ0kkKWAdI7KLrfk9ubemg48IpCGkkLp1CCpUKyi1rE/r9dEoKarRYyAALvGC2cobHuqjm3vf2t8yCekkjRE/uWKuwDr1PMBwvcfnrWO9ElicVVpI5LsozxCi4uObEXPPpqSGrnBSaIyJKeEMbMjhgLGzDn9dV8avCrOkoyZJJCoBtihPZ+301KsrSUwyIF2zDXC/X+z11LiBoIt53pEVYq6psgjJQSk3EYxUKTzb35+up6LxFvVIZW6wqBN1XwqSXCSycl0I5BHoL2/sz9PLYpmcRgpyYDzWHOpaiOZwJKceWQDqKp545uNZ9MD0bYty+OpVSSVpKmFQ0zOLMwdjYn+mri5153se7Q7bMXngMhqFSHJGCtEuVyFv5bep7a3xqaREWZqmnWFmxWVpU6bNbKwa9r251cXrZadk2loFN52acrjXQZOWVQ5MZ8ovkQw4B9L2vqObfdip5JYZaxRLFJ0mRY5WJfgEKQuJt686qxlnpajimp50EkEscsZJAeJgykjuLj10+40wO6WuaWkB3XNInXL6QDtJe4+o1zSBtz7c6AAttN46o+9S5/QHRugdrP2E3/nt//K6O40LoBa5xrumnQMWlpa576Qzh1zSJ1y/y1LKo8OqHVpPK6uQoDrYhuSTdgVBJ+d/6aghyV1jsjhGcqpJxJI4JII7dxc/9YCzFiVLYR4hAWZ7C9yoJue/z0RGYxLJI18FFwOC7KQLhb8ceutEqRgKWOWolBj6flhMhseWb+Um1src2101g6Yj+DhWS9+quSOTbEM3NjYe4+eiaepo1jklaVosFUOJMXdi1h5FsAfpoEsss7JBdhITkzjI+lrXFwNC32hkrisqT1ZZY/wDNjzMC4xWykgDv7f4vFLOJHFlAVVVLHgggAcheNOlaRBHGUZLgMQb3Yc2L39dRlbhSSou3Fu/1vqkSSFh02JYsykqnIIYn29dRFgcbsTYkG44B+R10IUGYZCAwJHOYJH9NRspseQO+V/fv20wOOrKzq6kHk2Pax540ZTyPGyyS3ZiiCMN2x7ev6aAyPFz6dzz+FtSiRrRi4B4twPa2hoCyNRmsqsVJaxhxxODlh76mhgkERkyvIAy4BgMmYHjMcXt/S2qyORFsU+8TZibA29h9fXR9NK6FfLdM8bA2Vbe51ElS0A1C4Ie+BLgqDl3FhawGjayGqlpkKJm0D9Q2JYiMrclb+nA0DWIEeNYznkzEsrhluW4UW9tWdM1QY44ycCkRBYt5WIPl4NzfuO3t76mWqkBVo8qXkQllP2hbuQ1r2JsDbRk5pasoGZUlkIwdEJDByAAbG5tzzbQLVc6uBKcH4hlwGLFLjLNQLHU/UifrHqjpieyFI7GOINdWhUnt3uLca0a8jBkEqNNCwxN2jYyKwAKn71jyDo5aaaSniQ3DwlrKfd7MCvv27aFNRETJIrEuZpTGWYrZC1wWBNr6naoLIs6tKTGyiYN2UEC/P1tok2+hBMQsf3xCxkmVSCQSBc/O4+mjEZ1YAkEAjsfNc2Nzbj6aASv80ZiUEyqyzAXz783J45t+mjVaBhdcQr2YshsSW4DKe59j9NYyu9gIsbpdsXawW4UBu559L/jqUTTgRws0hTK+H8KsRcsoHF9C1DyrCQn3o3Rvu+Qqb3B1Gak4xs4BOS2KHjgHLvbRVoQexilU9R1Di2WHPF+O+mMFbpquBZDYkFmU3H8vpqB+mJUb7QdRV4VRiy+xtzqV4kJkeNCJBg7YXXqIPRsvb5aOgLXZd6m2uWRfNJFKTnA10AdeMhcXvbtrYUm/7RVxRSGdad3LAxVB5Uj3cDCx9OdecSdRVeeytGhiY3bzIQcb2PJHvqdJo8ELEYvY3HZT6XsNPa6GnR6mkkcqlopEkUHEtEwdQ3e11uL6dz25vrzOKrqIMngqJY2FwxikZAyHvexHtouTe94kjVTXTmMXvixRvMtrsyAMbj56ORXI9BPrf01zWKo/EFfSrHG5FREsZRFqL5KbcHMecj8dWe3+I0mkKVwiiVheOaJXwUgXwkFyefQ6dhaNFrjGyufZHP5AnXEZZESSMh0kUOjLyGU9iNNlZUjlLFV+zktkQCTieADoKBds/cS/+cf/AOV0doDbnToshdA5kYhCyhyLLyFPOiGqqVJBE80SkqWBZ1C8HEi5Nr6a6Anv7a5fVdUb3s1K4SSoLtiHIp16oAPoWuBf8dZyr8W14ZzTJTRxMSI1kjEkgUepYm1z9NFWHJI2FRPT0sLVFTLHDCoJLymw4/lHcn6DVDN4v2SMydOOrlVVODhUjR3ANl8xJH1t69uOcJW7jVV9RJNUymRyTckAKOLAKo4AHoBocVDL5gRkRa9hcX9QBxquDJc/o3FV4xgFOjUlKROxOQrTeNQLDyiIgk9+9u3z4q/+2O8fy0X/AAj/AM2srNMzgDK4BJIawJY8ki3vqHL/AFdNQJ5MqYTgzDzEi5tb+p9tEwyP1c1jDIp5BQsO1+1j/TURGAQBAbq1hZhZh3AJ/PU9PM1mbML5eQAASey8L+Z0Poonfb1dbhmRmZXvIFOAP8OAsP11KaOkSNFisjotwyA3Z7HzXJ7H6nTA7ylVCT+ZbsBewW9hx686f9rHHiwHTEpF42t9oDYgk/lrPYCkSS6KUjKuOmxVsWRiCpv3NvfVYVcP5rCKN+kT7tYngDRc0s0DuhEahpQsTKQcArXYsbXPz/tvoSVZlwzwynwkVBw32nKmw7X9vnq4iOFil0y83B4N7A+lxpeWQliSP7eLW5134aRiwUEANgOoVVy4bAqqHm4NwdcEMv2tlY9LDI24UObKTf39NWBEwAJHp3HyGpI1lexHGNsWb1I7W09kUgBiqMqsScriQi/3bevpqFZCOL2ta1/4RpiDMZJTDE7JjkxDYquLPyXY8afHYMFDWGJy5srD1PPGuqpZARYqw89/ZRl+umBogYmXDlr4KG7E2Fyf79QFkjLlKGBBSVFZALrZr2t+OriESSEF2XhMWCHkNwPLwPrfQDwQi0vVDBQB0vY3vcEenv8AXRcMn3SWjAZVyKe549Of01lLa0MBqdsqhnNGyzGzNIqX6nJsCB3JPc6EtiBLE4XEgNz5r/dNh39dXiNLCZOo2asWIIDZBSpORvYfr6aq7h1y6USyRhmdVKguGu4ZQ3H4D21pCT6YgEEkBQvmUhVtxfm2rGM1CLJjiVCqjkEG1/l7HtoKP4e8jTSFFSNmjCKGLyt2Vr9gO+pY6hREoWMhg4Zn4xwItaw1owCKVZA0joJDjcSi4uObXUHv9NErJJCqGQwNH1AAxYEoO4t89CGdhK8ihFDZLYWW5K+o/rp8EhfrLyqsgBUC4uOeNQ02IuFdTgsnmDki48tlP8Nxx9dBlnAnQsjQh8YVkXy5IbFVA4sNcpZZWaxa4dwqeW69+CL2t7jU8kM4MIlS/VMjKCAclJuWUA99ZpUx0dM6vDI58nTXJXst+OAOPy1NCwkXzMrXRU4N/vL7jUK05eEKUb7rSBHicgHMJdyOwubdtTUm37gsmRp2EJZlJBUqApIJUdjbgG3v8uJdUFMgE8TJPC0YJxkQ37obnkEeo76fCz9GG+OADo1r85jgNbjRDeH91DIydNZJHUrG7Mj2e1ieLW5v30TBs9ZAsiVjBLFw0aOsZWRT2yPHfj7vr8tNuKXY+LBVeNy4BVUVQGJ9Tbk+vbtqLqMIZWYrlHHxc9hmAvB4OrRdrihWMyFs5mXBJpVh5K5kh3snIva/cD3PE8VG4MJgp4ZYTd5J0WIQRokgxiE8hx5sRxe3HfUc0g4sp4nkdUGbyFiAQoya458tubaIhSoyK9F1WwALAIoIJH3msP11fxU1PZABPFfL7OjSN2juCSpkUhPnwDzomDbz1Lx5otwSKmnjnyIuSx6srC/0UaFO/AcCpgptyZw8RtGpsGR2sbm3DLxo+On3ILlKXkEXmUlCAnqTydaJBIALyXIFj5VX8gNcqCwp6g5ciNu44/LRsrijMVMFXNF1SzKobEMEJDe97c6AennZgvxC2FhYh1J7ngMLfrrXUa9SkU3Iu8nbjsbcW056KFwAxc2/1jqk2DiYKpoqxCCuThy1mxIF7++q2SGp+0upuFJIBBa17WAGtrW7LOrSTUtTKh5cKxPfvxbWfeepiZviIFkufM7IA/B+8Ctjf2v/AG6tTaIcUZ8q4JuCQCe17D076juf5eT241ofjNrlZmlhni8oQ4NHKGI7Ni4FiOeb/wBOOiHaJjCIKhWF2ySciMooBa56yEHn/X1Ty/aFxMuWJPH14/PSyb2f/dOtJPtsaiHJWkFgFaJA6yksSWISw/8A2OmfAJ/o03/CP/Np+smPiYpnmRwz3JXLuLrbvxb8dTWmfqXUR9JAcGJuwkAK2LH6auajYquied90kSONYWMMsTgNJcFFchFNrHn1JtbjS/ZUUtFuUjtWq5kpUhlqPsp3MkYMcYimN/Q88+W3N+NT6kTTgysgarbHpsSEk6ZEUrI5Kkdn7fTTpJJRMFmWWFZgHhKusrmN72zubeY9+36a18tDuULU+7/C081Em1rI0VLjg1pSGMiMAcxchre3rbiUxbXLtK7Y8Er7nT0s9JQ7jDGxdn64mk80mAOIBD974NbjUPKvBSgYyohwV4lEUkoCyFo2fKFUQFogWC3Iv5jb6dtF1tHUyrAwELNBSoJoxEtOsUyozFUxtkQOcj63+httw2yhlmgqaad4pFiR6j4xpFbJ3SOIYm4AcEG172HNtDVtDLtsEM00088c4gjVEBhWodx/mmNziyglTYex0KadUw4tFONscLV1DVC40pIawb943IGZNhe4/PUc0kjLTuaaGFUjVZOiXBqEy+8xYlePSwFtXsW0BYnlra6eM9Et8EsNRPKsZRzGZpYwYgRwGBAt7C/m5Q0m2R7klNupWojWFoYAEqAUkke8b1HUxN0BCgY27avmhcWVdVEGUymPJWtBSSLLfIR3TNjbsAAPT30CkQyYyNGmEioUkazEtfnDuVFvN9R763NZ4SlowiQ1Bjp4qCrmkknDqk0uVuiBALcDzWtf15trJfDusCNGQGcWIwDdQ9QWszntb1Cj201JMVUF0yxSlkWIIky5xLK7ZWVbMqNYE8jvb+mhjRSUs8iVCxusZjbFZMo3WQZgB0Nr278/LU6wVrRSn4FMVIhppGQNEQD9p02Y5Yi3Fjbn21LTUm7VlPKqUysDK65vULGFdAInQhgT6WvwOPlqbrdgo30gIKpZ5DkEFiVUlsV4uMrWt8tdLSQMEKEoWDOjDESBfQ39PTV5T7VVxRzS/FQLLKgxaPM+WyEksFDWtcEBfnpyUDVcMsNRTwQGJJpI55Elzkem+yMWS/eRiO5sfNfU+on0N4pJbA0paiopyq1UCwO/maUP5EjcBTdgF5vcc9h+OjDtSwbXHIy0aS1CNMk8yzJUSx9M8LHcpjyGDd+QLc+W0ptrCJHBhIabcDJ00qOnDLNLAMkxR8rKLMe/ofXRe3U21UVBW05nkbzFZCDZ6jpy5RtDMDYrawWxtb1uDrN5GuilFUZ+h8N19TF/kaQ1EjUtDuEFUxKGKUqXkp1Qkrlf1It5L39NVUlFuT1TLLSyvUzy3fEBzLLISchiOzWNv+mt7u1au0y0UVHQQJ0WM+KVapJcoPMo5c4383B7j01JTSruEsKhKdo4GraqWpiiYCojdLBIWjAUXYX+np6hrK1sOF6MLNs9UkTuVBrUqpKRaHpv1yoXyz5EhSCfKONWC+HdzijpzHNTOJYT1JDIIBEwjDPC6Sc354N7cc2vzongaSmhq4qnKCa6zJ0VmkESkJkC1nRzlhyLkC3poSd6V6eWSClYwxtR06SSwQOCsuJYNJln5TyWx81xzxbR6sg4IBi2eH4eCpqdypaULmtjcvmC9ywYdiApXn1PPHmmpl21JhUl6TpCD7WORZuoGeNgSpIY+pZe/PtbmCKuoqyMSO7RGneDD7EPIs0F5EMcZTEopPI9b3vzbVosdQk+2GOmpmtBC08lUywgzqilurJFiCGysosSCPrZN/bHxrolSZTgkciu7xQs446qxnA5tdQVvcNc2v8AMm2pBMUiV4qmB6aNQWikyEwhdyS8flLWABN8bfX0Co6SspDVUj1VQ0tcIJauSnjlK5RO0K9R5SCVC/wi3YH01NHTBWhnkWVpUgeBhIrMCGBQcW7WFhz6n31DSHehRTV9RNHTq1qCdXdqqPIIzKoYElxyTkABYX+o5kSLMU7S1TR/xNBAWv1EcEZM1wfX1F+O5F9ORgrhkjxYqFIRAFtYWGIGPFuNH06wmJVMIBBvcABjz6nvoaJ5/QJBQUbSmaWN6iUtG/UrCJnyVbA+ZcePTy8as2p43WMNGj4CyCUB8eb8Ai2pEReLAqPrcfrqaw00TZFFTxg5dKLLkkiOO/5gX0Uigeij6AD+mmKQNSLcngE+vHtpgS6jqP3E572RtD1G5bdSj7epjDdwkd5XPNuBHf8ArqafzRupPDC34adrwU4tK2htF/8AbQ/ME/roj8dQQeWJFHYCw1Lc6diE1uR76Cmo6WUMHjuCPlowk6aQdAGUq/D1AAzRtVg88KiMv4dtUFRRSwZBRLgylSWULx2sbca9DkiyvcarZ9vjci6jgk6OTRDiYbr1ULMUkkRiyMGjbEgr7Fdd+P3H/Saj/it/frSVWzQksbYtybgAj5C2g/2MP5z/ALn/AF0+SFTJ6ncKqethSkWjjBSrhgAkZ5cAhKgRIwmDuCwUXUgi4uDxUww1UVZ8W0VOqNRTydYRS1BC5BUNJmvUJAY+gIPr6mwToUz2hWEBmImeKAuW6nla7vd724Jv21qVgnkASqlmndZndVNo7ByEwRYcRiAbDg/3YrrR1N/ZkIq7rLIi1MT0zVy4kSTNIJJjj1lxuMciAQFAF7/SKGlq6uTcJI5KueAtJNGkJjwjqFmPRldpDfO4fK4BAa9+batal6PaI4vhqysWoR5qCWsnmppGSxC9VCgAaU3WwxNhe/bmu8PiCnk3pTNTMk6vOqVmQaJknIZy6pibl/KO/vojsl6DaWKoigrHrOp8ZUVM0ss1R8G0ro5Cqj1EQyLA8jyi3HtyZuM1JLstDVQQ03x67pE0KMSwmmNY1K8mTKVBc3sxH8R4N7EeqlojR18Jq6OPqUsxEyiWNwbBvM6RsMf5vLzfUHhuhrKVahZhM9VTwwwSdVYJBRSrLIzpEshxswZSG9u3zJe33DhcnQyjq4d33aSaQSVNXgBTo9RH8NE0SBJppo0YLwfKpJHe9uOB9vjalWQbg9RPRV3WeMUpBZ0gmE2Bnks9srqy4jlTyAdX29RyrtdcU6QpjJD1IwyxxGNc5GVenFxcgG9zcj8C2WOWrodukNCVaNXQdGKHMdRjKZQJQHUNkDYi/vpQkntlTi46RJJus25UMcEtI7M8a1RnB6Cq7FwkYCEkEA2J+XqdU24U0Mk0VVuUIaRp44VcGdo0UQPjG3nuVy5JCjjiwvc6eGjo441iWJVjiRAgS6AG55slh+mhNy29axKejiheZzUBzD1TGChFmlLFgQouA1geG1W0yLTWuwKEwTr0WSrSF6NoitXFhNOB9n8UVfygSA3QBbcehvd0VNBSUoCs4+2eW8rRsfMzFjkwUWueeNVvT3yHcqOP4BjSUNPHttPRwzQ1axGnT4i0srEmznIhiRawB+7bR8NV8RTNLErRl4aiKNZSJEjqUjWXpxhwL+ovjzbUNFp01QR8WUN2aPFbgi8Ma8C/OAvoLcqmZWERY9OoZ5oZTJhIqWAJjwYXTkjleR9OJBLU2XqOueBvaop1XPAdiq9gedRMtbKaISSSyR4JFUyo7iCGUOUBBRTcuQBa3cg9uRFujocIxdssBUUE239SYUwSob7fqMIllkk4AykIvcn3+Xrqvrw6VO21YnphHBht6becYLsyOFdZoLYgWsR6i4BBNiL8OlUpnkDQzvTxtOk7qJQhZkieV3BZSLWAt63vzbRElCklPPWwGSSRPh5Q9SyPQRSrKU80cylmyJ45Fibgj13VKKZyNe50Pf4eakjZKRWmkrJoqyopZJhI8UixuGSSKM3DLYdwLXBN+NXNHBLBFW1MsNLBPFRKVQvUGlSkblmMlgb2+97EWuQNA0dLXFqakiR2hWgSlWd41iSFKZnleysCpkswBAC9vx1P4jnngjSmj6kVANuaTdXgiswpVlKpGshIUFvNYEi9+/oWmmuhU0wx4KShG4U9PWvCY44a8NDJF1Y45T02eyqW7Wte9srra2gztcSo0VDNJBBVQRLInRSUzSQNYP8AESZW4NrG9z6carKKrmiNe0O1F5aOjZ6CsEoiRI4YkUGdnFiHVgzcn1tzxq0TcqqKCNnhielahtt0aGYTVtdNnNGFdeBFYDM24vpJK9htgFW1dBIjSRxIsktRDToWWKZxDKQ4ijU4knyv+8F7m1rYi322lWvO4vUIHVcZadEYLgWHUBZIHI48uIJv397kyCr3ORqSP4ZFjSGlNXJGI2bJ4VdlDklRyeLX+uuVsQqfK9ayBFfKKmd6iWRixNzhx2t6ay9ReDdYnrk6sD3ONaL4SenSypS10ksQHErxqrpm7XYWux476pG3HcZaWGVFV5pJAXgSmfGOMMwuWbzdhf73rq5mrhXVm67dPDHFLt9o4JSXxcVtGHXqxk2yJ547W99AIKmXyfHqjFipQ0saqTexClmJ/XVSuycfFJ2rBaevq5aySlg6FqapmgkMpaJpWSxxUlSBa9j39weObijlaOlppKu6sTOv3hJksEywlg6DEgllt2Jvf6VW41FHPEizbdT1seLBQq1cZWORf3isfU9ge9wbaPoalZKGjYR9BUrnghpmleTjp4SEBxfjEcW7n3a+jmmDwSjHlWgKKu3uCOoadpGZQslOjwq6yIwyALx2cdxq32usetpEqJUEZeV0sWuoxbHubf01ULTTiJ0pa0z/AH+nFVN028p+4ytdbfQj9NRLudZFLudCzFJ6XZ13KWLCFo46qRzIWBHmv5gCLkcD17zBu9m2aMGqVXZoo6+ikWneCWOVZ2iZCM1tC97yG63HsL2+vutzWJ6KoieRI3bEx5tYs6XkxAuCeA35ayMW87s8kKTNEscrBGd6QNZSobKwAuALMflomfeKmGMulTSVObomJhdM42jzL2zvbmx4t3/FuVpiX404TXkIiCz0clPDHJP0Zo2CU6tFE2asGfImxN+SSR96wHPNrHusUkCK8UyGOCp6rmOVVkelhjd1pM0GZuSOD/D631T7du9RuVQtHNFTiPpSSApmcWUrbyuSPX9Plpkm+7jRbdV0O6Rx51FZU023ytWdWXbZJIyFXKRSWRTex7KDbnEaMUfI/wAqcm+MlRpG3KgplpkaeN5J6qjo0SJ1dhJVO0aZBSexBB9tTz1kUCRMMJnnkMUCJNApkcBr4l2AsCLGwNr/AJYSrhqkqKCqoCkVFSdOEytLCGNRAt0qzJDH9xmYqXsbsnNyL6LpFgmo4KemYoyRLXGsxhaV5XbOSSacpgrK1lIHooPOWtrpHFRuGOAZmICAElrgrYeobtoNt021JGjeoVAqyEyOCsZZCoxRjy178WBHB5v3zUUO8xPKPjNnjgnpGagpKOOQwAkhOnM8lpFQHFjivLD0FwZJNu3JJpWp62BBNFLgjRuyxzLjgyk3sO9+L9v5dFiNMtRSyqHjmjZWkjiDKwI6sgBWPjjI+392oquqpqSMyzMAucKWuuV5ZBGGsTew5J+h9tZWal3Pbv2CkLxGiop63MJO8TSJPGc5ZUNly5t5Tfn01FVTmRJ45ZqmV4JKGWOJ+m5raank6aIQVDHszL5vc85XKHRqqyoo6X4Q1Dhfi6uKhhLEAGWQMQAO/oOw9dS9KD+Yf7sn/LrObrXrNu2yky9CDb4p65nkg6nXkIRXVFAzH8tx7fjoz/tJTe0n/taj/m0nRag30ZvcqhNweoi2Z53qGmiZAZ16SQYdVhE3v78AjVrJvO7bVsz1FTNE+4uZIKSWrMsk8smcd8Y1IuEUk5H1sPXVbOu7JP8AF10EMM+cVPElHgShkGSowW4JPp5jpb34Q8W7lUxVay0LqKeEMklTKJY2CgPldCCb9yD/AE0Je5J9Fa435Iyvhjck26Gr3aVZMHqHjpg8RnqZ5WZjzGT1D/EFAHI9tHK0e31ay0lb8ZDEhpEqajCKKVGxMocY5Era4AIBK3uBwcnAm+bVVyPUJNCYviYI5cJGimujRM0Li1xa9iP00yhLVDJuE0azUVFNSwFaqzQLLOSQOkWBY2B9Leh76pwrSYou+0b9KiqrmjipqxCs9QYlfCAIY4ZnB+zwc2Nge17W5HcD7VW1sNRuLPTxJUzVErzLuj1C1YZ5mtC4jB8o8tmx/Cy3NZtytSVu91Yp5KWiq9qkhjqqKHoUsVX1Bk9JJI1xYW+6bX49LFVr0VTLtbxLURTxxYV00FXF57klEUyEm45OVub+4vrOUtUNQ9xZb3vEtaE2wQy0jxVtFPLXCXqQxzRi7RwiNcsbkqGPte1tXW3PR0tJVw1W7UiVdRXvL8SmP+VFsBZYnLMfKoW4+o1RVz+H1CyrtmVLKIxXEsuMlWVUqECHO/HJPe/z5PpRtm5ftqt2+j6ddBT074i6mtdQ5EIDEKCtrcWPOp21aG3TovlCm4QlleRVViMb+Ueh59dZlGrIJ/Ee8pK5epqkh2cRCGUgPKECCK7NdgLci3b6iSu3TfKDbdnnNJ9rWSzdYLY9KRVEgivIALHkHi/FvTVDt26U0+bsj0svxcYMdOvSlQuQ7PDMgysCAAPnqqk4kpKMixXat9gO4s1Y+2VM1VIZJRBD1WhCAZ5BgApB5+YJvoyOip6c0nSrZFWKreokWYpJ1Cq2EQHUUAKpa/c83PA1xQ8uzzQbjM+Kw7pDVVBl6zNAJpcpsze9x9e35gCHZGqaCOTcnesllFZAMFUPJWBn84EeA6i8AEg2UfjySnLk0n/DthCPFNosoqGkQNElTUFLMFANI2IYkm91Pv8A0/E/b5ds29HP+T1ayP8AExNUTUwKXYDJOCLXHB9x8uMvRL4dgptwWlrKkRyw0omeWCRppInPw6CBZI/N1DcGwNyT2txb0210MypUoK3JlDoagMksbIjRKSki+VlBPBHztqXOUXd/w0cVNUx25yiqaq3JahUjF45JUlUqoEiwhDIP5eRex5Py0RQ1VY8nh2kjqaSsgmlqY9ykUB2MEcLSQ9zje4Afy97cWOq/eTT0OySwgsIo6ijobBruGDGQo7ODbhfNcaNi3jZo91p6qngWCnqHrqOvnwlkz6MayU8scca59RicGIUkgW9LjfE3KNs5sqinxSNHVO3lYsA4ptwSI8MXlmQIpuosAP7dZuSkjiWq/bEtKorkjWYRPMstY8bKyyTIoLM3lW5C/wAJvcHiXxDu99li3DY6qOXqVi0rVESkuokbACISdmy8vIvz6ao9mpt6oZK+qrZaemlqgEkqdwcyyRLT+YuXyws2YAOfcduLa7ceH2cpM4pzp0gapO37QM3m3KdKyKRGp1jp6SCRYpCrM6uWcKT28vpog7rBuGzItQkop/jqiFP8vkU00iQx9FpXZCpU37YWH46nWLbJxE0FNV7zNT08lNTzSRItMtnLRkzShIfu8MVBJ786lqaTdJVRmhp1qaivhShg60cysVpJEVKl5VWNsrdrW7e2rlCCj1sUZSs1FHCFoduyZ2vCIrVsckbNJEMLtBawJC83B7cd+CzI6qBDKFUI/ljgtbg2ItYcW1SbTulHR7HQwbpWy0NVStMs8dYkslTHFFMyhXspbG3AJ9ANWySU8jRSrXTyRnJhiGWIlixzbKx4764pKno6oytbZQV0q03iGsh+FSSfdP2NKalLiQIkBQu2QIxFu3+sPbUaShmVslqVRwLvZZlscQeeT+F9R7g9PX+INi3CgYS0a0VRSs2JR4qmlEiqHVjexVxbv29LcyI+2zzdQcSQydDMgqjOwBBHNueLfUfza0lREd2DSiVmUw1+DRt3kgdygUtEuOXa3mHHodSU0DvW7QglMhpqCsrJZkPTIeunb7TBgTc245HrqeKqWZX6FbPMVCxfucgXYFRYse/OQ+S3J7au02uklhhrXD/FQwuGaNgFmUiwMi25sL259flrKEbto3yz0kyqIkljdg0VZHizAr5Zxl2CsPl8/wCuqcJFUbh4qBlkFUaX4Ckp3/zkKwR9SQtYJcNiDz66tvg6WSb/ACaZ1eHJWhjYAC6CwIHNwPMBz7/SrhpJZN38Q19RG8aQRy7dSqIykktO4WYynIAEEcIfXnVw/ZlOS1TIopPECvTdWgGECsI2WISFAY8LBYpOcgAv/wAa5PJWJCQIJAqUqUipDFVxzYMcvK5QjykWbnkH5amVdqwDrUTorOCHZVbzTRtKEVlN+x+nz1IIiLhN0ABdY7ESxBiITCFTEjy9yD24+V9RR0+or6/7BqGrNTuIb4VoSlFuIxVWGRkYMO6jnm392q7cKWKo2yj6tSDuG2lvi46tgs0juiqQQq8NcAWJ9fx1o4TUrMWerSWHpTy9PqszFM2KkKewA4Jv6axtXBtCb5vSCslNJJDULULNLn055IMsnlQG4je3ON78fXXHHZz55qTstaCojSjqEeITwQ7fPQU2ZVYJ0YmVAmC3Lq5UtYkfS2j9l22qrqYUrb5t6VlAZ3moqSINTmScgBKyVFAIHIJUGx9eOcTLW1kFHSv1DK1O9OIpzmiUnTByp2hPkORCm59reurTwpWVe2VM9XH0DHWLDFMXUdEoXaR7KGU8ehA+Xprfguznt9Ft8VI24mOanSnqqKSpoKpAwkYGmkVhjIVFwe6mw/XjVMSZohfsshP6arfEE77dtLbgW+MSarolkjhJaJ2YMI3Lq1h2AJsb8Di9xDV73DBstJvlNGJmmmNK0MxZFWQfvBdeePTWL2FE3iCWWDb3mSmFSYkmZ0LYhVOCl+OeL39O2snE9HURx1EtXJTVE/QFNRTZSSt5QhYyEgojHzKSD37WFyVP4lO7wUiTUa08BrDBIY3eRXcxiRFZmsPT2OiIKiiqqh/2hGZ0pVIhzhEkqPEnVjCh+bdxwfX5a0pqwu6DI5qKfd6OijlkeqhepeoBcskPXpVYMtyLMSq3HPA9Lc3fwU3+kyf4/wDVrFb9vdQkW31dPJ0NydXgaopMFxpwgcR53zzGYHyuR68Zv9ub7/4pX/8AHbQsfJWUptHos/xDb5tXw46qyVRNSC6rgkVI0fUBbg2DkkDnyjWrd5MY44sQvCseQQgFsVt+GvN9qrtuqfGkdTRFhBVCs4eJk8opL8C9+4JIt6fPWqqd/UEpRRqw4tNODyf9WP8Av/LWGWax1ZvgwTzOoItdzoxudElIzLDGkiOZemHKBQRZMiFF72N78azyeGPBy9KP/K6qbKRb01RJi9luyeS0AFuTz6akoqsVc9SdxmM+NPeCB/N1JC4OMUSi1+OOPXVnHNUS1cbU9PhSyxzJTySkxYNmGmlaFLPycVXkcD56y9VyVo6Jfjem+M3/AOFWw2Gj6tPS7PSEK9marlerUsvF8WYpxpVq1G57BvEVNGklUKqhaGGniiiRFV7+XAAe97n00THt9BTxQVNfKjPLIFfryBIg7SGQHnnlRbknvqCqqVNDvVTQxwAwxbWnUVGip5ZEnykdAB2F7A29PnrODm5pyZvlWL0nHHH/AHKWbwrvFRtymLqDdZJqeUQu4ip4kVWVkLC925vf8NW2w7LXbJHUJulVFSVM09P8JIkvVilkZSDe/pyAex4J0A3ivdaE1tYKyKop0hWKCF1jKCeZgqEgAPZQGYA97flP4f8AFlfX7jBt+5T/ABtNuCyRESRRDouqmQOpjUC3BBHzH49yuUNHlP2vZH4x3Guq9so4po3hal3QGQXLROWikjUh+3BDAf7Xy1k6OslpqxZWbO00LOXAuyZKrhx7kFg311b+MKmsp9y3GjrAUhrIBUxRJ5olfMdGaI3PBxN+33jxxrJLUFA2ZNgrXIPdbc2OujErjTMZ2nZ6VUx7jW7UIdvEEy1tPuFPJNW1RR4opppFjdGx81l4/LUZ2XchVzYSUfwXxlLuWWcnxHWpqP4WKJlC4hAfNe/y1XTS1cS7ZDG0qRbf4Y+MlSKaaIdZ1PSYJGPOQeyn3vqClNeGpOqtY7QLvE4hdK6oC1CKsUcaSg2ucS6lrjzWtzrzUmro9LVKw2n8N7lT0lTC8u1O8sdJAUlNc8KiBZG69+JBJc5ACwFu3m1ZNtcxFJE+7oy00FLS5YzGoklUq15TmLsxF1Hf69zT0231TfsWKKgrDLDT0ci1Hws9PHBOKzrTySmViQ2KhfXLLsL6cuzbtLFA0VHLRTJ+zjM8zwJLJV0qzyyVT+c3uz2U9yB6DUu32ylS6LhdnoqzbhDU10LUNLVzbjUSoRGtVJjKQkZybm5/mNz+Wg4ZK2Ta55ZW68hiqKzpOajJpW7gC5ILG1z5efbUqI1BQ7PtLtGjCjdKmxD2VmKNcpe/8VraD2naKqTcqGRZurR09YJzIk0pBWme4DQkgjK3Hp39tawSUdnNklcmH0Am3TbNwELQxSS7pSzGVoi0ZqIGjkMvTcgluAHuRz9eeCORpkb9l1FY/wAXIiTbnIFiCl41WWjp2Cwi4zOIW4w7n1uk2kbT0IqVZZKKaarkeRjlJHLO7zkzW9P4Qbeg9e9TWHbYtwaNoqqadXfc3WJlCEpCk7xi6sbjpxN3H7y17EqevG2tHLJ27JamtrkMzGu2+Cnp6qe+VnypEnp40A6QJDcsG/2u1uVGqJmjo6iWSoerei3qmU5dRemcTGDGWLNze6m1rngW1GBWSmL4PZqTKqlkllqphLLFEZpmj66LUcngB7Y+g4s1hdjbHq6evpZJZKYVkipE4CRmm6QVInTHyBzbIn3b0txUqSFHswybpu8ldBuDzBjWy1k8HXZHp2i+IekaNg47HEgXBFva+ihKuy1tJLPUl06KNBBS1ET04zkK3qZAcgFtcgLc+h1Bv+0PQRbVEombbqSSr2/pS26kdQkrSs8kgsCXvf07W0NVS09G1DUUWy07GaJI3EDPURqxIEbMI0IV254vc21nLi10axs2cMfieqqWqdsl2bdNmqZJJEKSCF45B98fdBzJJv5iCfbU/XpFM6NLMtVTx9SYPCirDIftEhZX9MQcrXPOo9q3Sal2vw8aqHpT1VRVSyqYuikSJITZ/QFslt+eqDboUnq9+i+Karpp9zl+Eq5SwkrY+lJG5ikkHLLkQWPHB+msZxVFR26C9l3x66CGASpNWx05EqS4oY5IwxMq2H3WsFbni/y53e0Sy1dDRGog+HkkiaCaHqLKFMbmPyunBBBBB+evIKqI7TvdFU00wqqfAPJjlGwha8DQuzWubdjbm2vQqaumfw7vb7NE5qY4Zv2cKdCGLMgQiGw5dRe1h3HuNKK4SpdMqafnwCu9DtktXW1dNVCWSpkmgpaKGSqnim6TU7F2VVUeVRcn+a3PfUFB4qo99E1LLTNTV6KCFk8weGJuR90EEZcgj1vqjpvFtLRjJIKzoQspVVHnaRh5md3YAkn7xJJue3oD4I9z8ZTPvGz/APdMm3009FDNIS7V80h6nTkfAAKvYmx7jnjhRi29r+ky0giWqdZawvRRdGJRg8yBA8ZYU8fUaxsAc2b2X66heuoAYlkoXaWbpzBIQwLyy9TpixsfOFBsfRuRxoOGv8URzfBNJBPNGsySyV1MYWWWINkJBGbA3sFHY+/sc251VNSbZUVdIrzyvL8V8MAxgMarZo1y5Pmt9460lHj2XGa+v6G08MPxMitFIEhjWnlLTM0RMpMkkS35IW9r3/iIHbVVuvhKmqZtx3Pbqlp1lNRPV0ZZAFjwLFqZ0Fzaw8pBv7+9hBXPKKiODbZjFFJOJGWWBFhAUStLOrWCg5A/eJPP40dDuNZTzSSUlSspEKzOpJVlxmVboAP4b37enrflxbW0Zyd9lWldAtJXqCRULTtNBOxBkinhGcckZHANxY2HNzoWso3EdJVUjM0nTp0dAACbRixAva5Pfn11oqfwzUSS1dazxqRLIlOlUqj4iElwxkWxCswtjft621p/CPh5NupUmrp4qmrmKusapklIFUARI7dyO5IA5+mmpp9Dars80/ae9PAlGkswpad2maniUrTRzMxuWUDHv7/PVnDXCv2DcqaoMR/ZpgradIYoo4kInUSGSOJRcWve/vrab/4So6r9o1+2u0VWTNWVVIQWgrZLF3Ki91c829L+gvfWUpq2Q0E20UNKJGNPIFMcZklkM2TSsxAsqi9u/wDTVvaVGa0UVcdvki23Cog6stTU1tXFTxuiQ5yJjGnZQLA42HH46I/a5pJFmRhITFPGHKoGWOQNHiMgRlYnm3rqGs8PblTXleAzRWQO9NkxTi3mQgP9Ta2n9KCTb2p6z4jrRzKaIJgRGCLOXUNkQRYDtrTsX7B5J9qrYKaJzLTT0sAhhkdlenYlwWeYxgPcgY3xNuPbQ3wdN/p+3/783/8Anov4SOikpuvGRFIwKzOroqLkAcywtcd+51Y22T/xGH/eX/l0rrofGyu8KOB4j2G/Zqp0N+1ngkU3/PW7odvhmlrjULOIYKroBVKxlR5ndpWsQAoAv9dee+HXWPffDrev7SgHtw11/t16bNSxUSvPVmapppaiWWohjeRIEd7lPsFJLAmym7a5PyopyTZ3fh5HFSintjoJaaJaKGgT4too2kk+GTvMUOLTy8RjvY8k/low0u8VLBpZ0o0PGFEC81g/UA6z8X7A2HpqPPdFEMEMTROIKVoxTQQ/CGZ2vIJme5Cr2AA57+upliCzM5qYzjutO6GScysECECBrmykktb/AKa50jWUr2nv/katBs1OTLJ05ZFiMpmqXM7mNG6ZYXuODYcD5aG32SjqNi3XN2jgRqeOcspEkQFRFfyKSb+w/O2nQ09BEqqiVM6zbfUOcWSGGRElDMy5NcOTiD+eoN8WF/Ce+SRriXgWeQkuxaRamMMxaQBieO9taYncqMc0dW22YppaSSiNBCqJQRs7JATeSVyCDUVUndpT3v2XsBYc3Xh7YNikipa6Jq5XORVmnRlSVGwIVGS1wb9wRrHRyBaeQjuBa2tJ4brDFQViOwWJKpnEjyLGsQeJbnOSyXvzyf667skajo4oO3spfFse5xb1UGuqXq2eONqeoZOmGpwCirgvlGNiCBxf66o2xaNk/mGK/U+Ua0/iOeaufcBM2bbVPMkJ/dhoZRGpxAHNjZvYgn21nKGMTVu3Qn/O11HGfo06A6vHJqOxSjs9c6mLywROwNMIUlC5KqfZgLdiMb257/lfQ1ZVyRU9RJ8a0QhwlmZGEsgjWRVZVQH7xviProeq22mqqirqJp3XrVEs2McQIs6xRhZS72awTjgfePtqNdroQKuNusY5zSJeN1ikMdOpIzKqRcsSTbvxe/r4dRu+R7KtKqJxK4kBm3yIrHUMXiQxkMAP3RCksO3YDRDV9Aiq5lJDcgLFIxNioNiFse/oT9eNMg2nb1KyLT1TkZWZp3IPmBP3FHqP8dtEjb9ujVnFHSr00N5J3y6a3yveZ7ADvpS4yBNoBr0LbpQFo8YIqVYGmHaSeSYSKhB/ly40V4fpJFn3apbI07O0lLC4bA4vmxjW4vjcDm1/bjUE21bhNOu6Rky0kkgqDGrDqosUZWKQJ3KNZSD35vax5ZFXT7fLHPmen1eQW8qs4F7ge+vUhH2JHkZJtTZoty3IUG2bruFUrdKGKAqkbAlhLKiKtiBySb9/T5aztD4q2yqme23VrR4raxp43klchRdi9hYDnn2/ATx1uU9RsO1iGAxUlZucnVbLhjTplGoH8puxv7rrHUJWGlQuCvxHVKkElpQxKDj3FuLatx5RewjTez0J62n3R5k2msrI66GKUvts80RFWqXzEE8LG0g7j6D2uMstWP2jtsiVc8lO9NMIWlmmdqecHzx5SgNcHkXHr8tO8N00VDub7rJUdNdq26oqoYpWtNWVbo0aIiY3x5BI/wAAUzPIdtjmp6E1URjaqeJ1dppeH6sy/wA63Ivbn5gXMKDT/Rdqi03Ku3bxJNJRyzQ0tPTTTGYon2UNLQoOvWzkm7OzMFQfK3zJPhmbcoaaSOhlnghrJxJHlSU1Sj/Z3jaVmcSrcA8gWBOits2fatwoNyicz0z1zdGeSkqA4GErSgBXvYknJ1Pfjtbirgpd42+vp9tzRWqaiOlhqoGjJNO+VOsoiQ4g4jIAr359bmpq40uyYO3sdW+Ioo6BpItuj+yMcEZrjNUrJW5rLIiC4RQos6kg9reus3DuNYaZgtTIFjLta4GBlfORYyOQLngf360W/wCwxbcKyAbhJJR/F7W7rMUaqiJVw7yYgAkKbAgc357ayQmEtOVaUoZEVFzQ2Mcf3Rkv4X41eNJdBKx6TTGVVDO7FQioAZHIvwAACeNbCh3Sqg26OkeWVFidHSI3iaNi7te9gw55OqvYN5j2cL16iCalaR5ZY1p8jdkwyDsykHtfnV1uniHw5utMYFhqIJwySxTiOnZyIwWxVsj5ebcg/TjV5K8GMU27kzKz7lHV1bGkpqaNbLEidUJmFDO0zBzcKbf07k6ufDvjGp26aKCpd5qEvBTFQCEpYy+IeH2AyuRbkfPsRttNRNStt0m100cUwEsZr4WE3UIzJarUdW57AhrfLm2sbDBLUMtHTLepqquOmgRiQUklcqoe/IA97emojxlaNZXR6lv6UY3epdJVE0scJrcT+6SmjykYhbtcrbj1NvrqgrpG3TbtlqqAilWasl6XWilkWnimRYmllaFWVUUAliT2Nr8EiHxTBXUG6+JJxKtpqCIcqzdSCoplhJRybghlPpqP9tGm8ImKmLmqk+H2wukZjEMLRkGQ24GQGI57k6zabasEqdoHq66lWNdo2+pkNFRkRCSSodaeslBPVqmjj8vmPKfID8BxuLUkcxhQCaSWMRTrO5cYjnC4C435FxfVZQwwSRytOsgWOZYw8eXTQ2sLsvHfU1VS1NOlRkMoliVyxKnMSGwKKQORxf210pxT4kODl7jUbTvVTUq0EozkeIxFvXrQMpve5BJBF+3662NPI8UVQUYWAiAFxfIkLwO/115rsipSNHK0xdVljaRFVvLHKl2YMOMjYAD5a1OyVFVP8Y0lTKY8lZTUSoFIF2wDOQSRe/fXHlSUnxRtFOlZeb3vLbfSzGGYRV1Wiw07Li0kJFw84R+OB2+f01gkqKjaVeSKvEonAJSBDCzsovaoj+7YenOtH4waklpaJqaanmlM0iMYJldkKxKxH2ZIuDz8vx1k6WN6uppqeNvtGkujsRktgb+Ygge3bRC0rKpMJ3jd6mploKWAShHo4HMUWTNNJMOobKoyNuAOPTUMW1VcZWXcaiDbVBBSOb7auY+mNLCSw/8AURoTcNyq6Lc6xKYfCOrmnqeldKg4qqmN5T5+LdgQP7S6GpingnpnwAeF1PkUvOhbNs2YgmRDZo/XuL+mvRxRuJxz0yxkqFpqZzFStNCKgUsx3WUSOXClyTRQgRLx2LMTzoX9ow/+Hbf/AO3i/u0UUlkoqueWYOKqnihbKKOO1RSxGWJ1x9XHIPexH4UPTqvY/wC8NUoRfgXJgm0JKu5bBUdMrC260iI7IcWdJlDBHI7i/POvZJuqIKow5dYRS9LGxPUscbZcaz+w7XDLRMGpxFHFPnHBURg0/kcTpLAotcA+uR599Xsss6wzvAudQI2MCkgAyH7pYn27n6a8zJLn0dkY8Xsgihrj8ItTUMkpmr1IacOzJJThR0yObr9437aFjfbooZmkmeZadKOcLHF0YJFhkMUbIHuDkb5H1txx3dT7ZIgrEkqSY5I5YKZwfOhqbNM7FuMmI/L66X/dC05kvNuIeWJ70EYnMr0/kRI1jKpgliAL2+uubizteSKb3f8AoSUtZTuz9GmVKOgWojlaYZNIHa8cCE9sjy3BtxqHfFkj8MeIUlbKV6KSSWx8iu0sbFUHoq9h9PnoSm8VbZJXPQLt9XSO0pNpxEjySP5mvGnZj3Fyb6rfHMm/w00ElPVOdjrI1p6iOKNVKyg5ATvjli/GPPcEfXfFBqST7OXLkUvitGFWUyIiKgLIpyJNiyA9jbREFWIigR2XCQSIb3CuDfKzcX/DQtMiEsTzYG4DWOPc21ZUnhrxNUFZItrqmiNirSCOPMHtYSsD+mu+bVbOVFhTTRVSVUk3UqK2eSRg8j5l1CjO4YE5G/c/TWdikm26vjlRY2moqkSIHUvGHja4yU2uB7a0KJWUlfS7VJC1Kwkijriy4RqRiSocCxvYWsTe/wCOhd+2WmppJ6yjnypHqirxyMucckhLFY2H3gDcdrj56xg9u+i5uKquxkvivxM65LVxQgNYCCmp0N/qVLfrq02ff94qqzbKCWVJV65EsrBuvLH03cl2ytxb+XVFFCiL05gojd2crZS4EkYjJBIve3bnjvqy8OUU0O7JUOCI4KadgbEqxZcAfyvpZMcYxbSKjNydMZ4k3Gt/be5otRMsaNBFGolYIOlEimyg2739NTbEY65K6OSYR1xw+DScRikqGHIRrj759L8Hjvomk2mn3TfKirroJptrkearYLKYnmElsEunIAJIbkfd+V9bePw14GkiwTZ0jRxYlTOr/iyyE6j1IqCQ+Luwej32aqimq6cOm5UUcv7Q2zzK7VKkK0wB85jAyJQXsxUW9WIraBapKSq6Qo5aor8RSMUfpOVJZkAFrfzD/wCNYnxLRS7PvNqWprgqJSy0VXI5+JiDKOOuQMsORyb24JtrQJu9WgtVIamvp7QTySN8OtwAbGFF4J78W1V6tGUo/YT4moTV+H49vklM1Q1bRpRzTgDoyC63RUAGOOXFtAyeGKQRUw26aSGWnohDTFrs0zWHU6hf7sj2K3UDvbseAvEM+6VUG3StJDDJBIK2ngiDgFnYIgd3Ykk2PrwDqKn8W0AjpHkkq45oJ0keKFEkklu9zGpdcQO1jc/S51UHvZLtrRWCeJVVoL2Kg3IOf435voKVqb4szyYLnAI34AyZWByB9+35fLTa79pUdfVQVtDNRyTPLUJBMpFo5ZGkBQ9ivNrg+n4AGtZnMMYW8j3PHr/CBrbimhJ0wsVNXTy/E0ks6uzA/ZOVPPax9r9x631otseWHdaCt3AM89NUPX1KRBnc3iwAZuwALKL29gO2q7ZRt9LjNVzRhYlCs0mfl7kCyAnE+9vrqbe5ZbRVUUskTxlFzgkwYLKMhDlFYFVsCp9b3+mEnvia/tlv4lfr1O4TOshi3GKoFJKquYVnsuFPI4Fg3a3I/t1PsezwxU3SY0FlQOWIxmOI5EjEEEXvrKbTV77/AJfTUVSyPNTTzBKicRpMQVBUGQhcjcnv6a0NFU/DzRP1mlheFVmR1jcZW5UN/aNYTjJKjpx8ZFfu9Bt8MsFYaKlaGGoCyR0cipHUSYu4yFiL3sTxbj56oaWn3fcKxSMy8kqCoqLWVBITdnxtxwew/rrYbvtFZuCwtRCGKlZqiRV+59r5UTqOoJI+9b1uwHYX0bT+F6mg2TcsauBd/kjSalWXFFCwEuYUikNyXFxcj2FhrXFN8THJFKVIoKvad1p3dqSoklgK3KqbOT/sk240K24fAbhSzy4PU7S8U6s8KpI7SqBLE9jci18Se19PoPFkL4JXRdIkD7aEF4j/ALaHzD52vql32qgrN03CphfOKVoxmOFkZEVCyC33SRxxq1G3sjk6NP4v3ag3da6oolmEMNNS0aSS2DTAyGbIqOQPMQAfb0vYULMaPbdqmJ6ke50FQtRDNfps0TC1gPX7pX2I0Kcm2SolyNmr6WmwtazJE73v6gj/ABxqfdARsnhIkcGCrAvfkZJpJVr9jvyc2qTqS/DUpdXlZ5xG7HpjoxtI75HgAAev9utl4bgpN2jqaze3p4Npkjkp4BVTRxGrkPlaVS/ovoR6/TnPeD6GGoG81EqkgpDt6i5Cssv2si3+dlB+V/fU+8ESblULjgtPHDBBgmKCKNQQQvYBu+nJJysIydUiWoo02ebcYaSuiqoJCq0c8TZdamYYgMUGGQuQw47X9dM+Dp66KKSdJcKE2iXANBMJWVS8jAZAXsL39OeG1UCviUGNkdkDASAyEIVvyxQC2rSKamh2WqaCpDrFHIxUSG4diERcPvY3N+eL6mSa2NSD9snnTcIImlVIViWSOGAIsFHYY5kJwCRYfhqano9sp64VMMlTIsbZRddVUqxPBCi1/kT+WqzZi/X3SRQSs6UwjYcliUclV+fbRjbttNYkT0InUhSKiKoxDRSXtiMTex5PP9mtscE6s5805W+JZeIdj2zeIP25GsnxNKl9xigIRqqOO32hsD5lHe3cf7OsbVTbbD046aFUIId5AWa3Atlne/prU7DuM3XwAySYkMpuchY+Uc+2sDUYRz1qpYpHPUKoPIKq7WB1ulwlZnF8lTN3RTJURU8yMUk6sZq1BFnliQtiwPFj/CABYN/q3B/VH/4l/NdUEclRR7jVwQ/DGKGk2t3zdspI54+rHK6qLgqCFc+gN/Xiw/aEnvt3/uJNCt7iyq+y82Rctxna7DPaKOrKqxCLJK7RsFXsBYcDV9OkdPBFKiBnJH7y7Lww9O2lpa8r7O6RQ7moJ2FWuwq2rIZgxJ8glUWX2+8f09tVG3u9J4d27oHEpXCnQkBiqGomHGQIvwNLS1MvgKHzKuvhQbjt9YCwqZpqZpJAQCWaFmvwO+tFUySGi3fbnbqU1SJ6eQSAM1kBYOCf4uBz8tLS1p/hBhL5mL8HbbRbvv1DSVqu0BhmqGVHKF2iTIKxXm3vr2laeCN1xQAFrG/Pdb+ulpa0z9oxiF4iwHNgOAeQPz14r/8AUB2/7TbpF5RHAlGsaqAoF6dHJIHFySbnS0tXj7CXRnadmN2JJIXgkk9hrSxu0MwEZIDdWMi5tY07MfX3F9LS1pm+IY/kanf2l2/btkailkgFMII0SMjpsJqdHdpFIIYkjub6rU8T7zGmzlTTAz1BE56K/aKgsFb0t72tpaWuDwjqiXssh3ek8Kx16xyJX7+wqFCKoKU4LpGoA4X399Wni2ipDRpX9MCq68VO0i8F4ishxcDg2txpaWtsPxMch5zWJ8ZWbfBOzlOtRgWNivnVPKfx1sNm8HeHA6VvSqDNTVCzxgzvgWDsAGX2HBGlpa2k9GUeifx9FE3h8VLKDPTbjTrC5AyRZiVdR8jYE/Qa8upSBW00xVWaFOsgYXXNXDAkaWlrXH8SZdkiVlTSyirhYLMzYM1hZlkNmBHsdWNciIZqdR9i60VQFPIR5OoWw9hwONLS1nLs0iDTl4aNWidlZ2sxB5soQ/2nUdFPKJvhAR0vhWnvbz5Fu2Xe2lpah9M2XZ6JVSS0Ph/bTSuySDazXiXhpBUOAMwWB7DgfX8dZTbp55WeWSR3lZgzSOxZ2N+5J0tLSh8GZT+Rm/EMMUO8bikS4qximxXgB5Y1drD5knVWew+Q0tLXSujMMhZjQ1iX8hnidl9GYK6gn6XNvroIXta5sL2F+NLS1KKfR6D4Zhjh2OnlS+dQaiWW5uCyztGOPoAPw1UVrtNWTySWMnPm9bDsPoPTS0tZPsrF2QPFG9LXXHCUk84UcDqxFMX+oyOqR7Yj5so/A86WlrXH0GQ0O0EptzSqTmKvg97Y4gWv9TqKVEj62AxLs8jlSQWZiWJY9/U6Wlrph4OKXbLzw4qit2sAd3Qn8FJ1iJrdeo8q/vai/Hf7Q99LS0PsePplvQTzLGkgY5sssTG5uyMvTIY9+3GjvL/KP1/v0tLXK+2dsekf/9k=",
    },
    {
      id: "53",
      title: "Beatlemania Begins",
      category: "events",
      amount:
        "The Beatles' rise to fame began in 1963, marking the start of Beatlemania, a cultural phenomenon that swept across the world.",
      date: new Date(1963, 0, 1),
      pic_url:
        "https://th.bing.com/th/id/OIP.Ptl-REz2E0esuBXJJeY4OQHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: "54",
      title: "Martin Luther King Jr. Receives Nobel Prize",
      category: "events",
      amount:
        "Martin Luther King Jr. was awarded the Nobel Peace Prize in 1964 for his efforts in advancing civil rights through nonviolence.",
      date: new Date(1964, 11, 10),
      pic_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Rev._Dr._Martin_Luther_King_Jr.jpg/1280px-Rev._Dr._Martin_Luther_King_Jr.jpg",
    },
    {
      id: "47",
      title: "Hiroshima and Nagasaki Bombings",
      category: "events",
      amount:
        "The atomic bombings of Hiroshima and Nagasaki in August 1945 were significant events that led to the end of World War II.",
      date: new Date(1945, 7, 6),
      pic_url:
        "data:image/jpeg;base64,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",
    },
    {
      id: "48",
      title: "First Computer Bug",
      category: "events",
      amount:
        "On September 9, 1945, the first computer bug was found in the Harvard Mark II computer, a moth trapped in a relay.",
      date: new Date(1945, 8, 9),
      pic_url:
        "https://th.bing.com/th/id/R.ecd6244e44171718ab862a1ade104a4f?rik=C7f5cf0DOMfqug&riu=http%3a%2f%2fdemystifyingcobol.com%2fwp-content%2fuploads%2f2019%2f11%2fFirst-Computer-Bug.jpg&ehk=XWyu2K8vIZjvOdUcg8JCx7OXMwWyq0vOUV7N9JOCqAQ%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: "49",
      title: "Jackie Robinson Breaks Color Barrier",
      category: "events",
      amount:
        "On April 15, 1947, Jackie Robinson became the first African American to play in Major League Baseball, debuting for the Brooklyn Dodgers.",
      date: new Date(1945, 3, 15),
      pic_url:
        "https://th.bing.com/th/id/OIP.tsmautSAHot62fm5sgqsmgHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: "51",
      title: "John F. Kennedy Assassination",
      category: "events",
      amount:
        "On November 22, 1963, President John F. Kennedy was assassinated in Dallas, Texas, a tragedy that shocked the nation.",
      date: new Date(1963, 10, 22),
      pic_url:
        "https://m.economictimes.com/thumb/msid-96280101,width-1600,height-900,resizemode-4,imgsize-14968/us-national-archives-discloses-information-related-to-john-f-kennedy-assassination.jpg",
    },
    {
      id: "52",
      title: "March on Washington",
      category: "events",
      amount:
        "The March on Washington for Jobs and Freedom, where Martin Luther King Jr. delivered his 'I Have a Dream' speech, occurred on August 28, 1963.",
      date: new Date(1963, 7, 28),
      pic_url:
        "https://i.natgeofe.com/k/f028bcbf-3665-4a4a-940b-53de52b6f886/washington-martin-luther-king.jpg",
    },
    {
      id: "53",
      title: "Beatlemania Begins",
      category: "events",
      amount:
        "The Beatles' rise to fame began in 1963, marking the start of Beatlemania, a cultural phenomenon that swept across the world.",
      date: new Date(1963, 0, 1),
      pic_url:
        "https://i.guim.co.uk/img/static/sys-images/Music/Pix/pictures/2012/11/28/1354113727187/The-Beatles-in-1963-009.jpg?width=620&quality=85&auto=format&fit=max&s=c12dc38199b6e4c94dac8e5c1a684af1",
    },
    {
      id: "54",
      title: "Martin Luther King Jr. Receives Nobel Prize",
      category: "events",
      amount:
        "Martin Luther King Jr. was awarded the Nobel Peace Prize in 1964 for his efforts in advancing civil rights through nonviolence.",
      date: new Date(1964, 11, 10),
      pic_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgm5p1L6n1-JXp-quOKnKFHDJO32pYrMofA&usqp=CAU",
    },
    {
      id: "50",
      title: "Structure of DNA Discovered",
      category: "events",
      amount:
        "In 1953, James Watson and Francis Crick discovered the double helix structure of DNA, revolutionizing the field of genetics.",
      date: new Date(1953, 3, 25),
      pic_url:
        "https://www.kcl.ac.uk/image-library/Press-Photos/Rosalind-Franklin-carousel.xeaf9cd0c.jpg?w=781&h=440&crop=780,440,1,0&f=webp",
    },
    {
      id: "51",
      title: "Korean War Armistice",
      category: "events",
      amount:
        "The Korean War armistice was signed on July 27, 1953, effectively ending the fighting between North and South Korea.",
      date: new Date(1953, 6, 27),
      pic_url:
        "https://bloximages.chicago2.vip.townnews.com/militarynews.com/content/tncms/assets/v3/editorial/9/5e/95e8fb56-940b-11e8-b482-f70a9970cf5c/5b5f2be3853b6.image.jpg",
    },
    {
      id: "52",
      title: "Coronation of Queen Elizabeth II",
      category: "events",
      amount:
        "Queen Elizabeth II was crowned on June 2, 1953, marking the beginning of her long and historic reign.",
      date: new Date(1953, 5, 2),
      pic_url:
        "https://www.telegraph.co.uk/content/dam/royal-family/2022/09/07/TELEMMGLPICT000308274558_trans_NvBQzQNjv4Bq-RpvcHkEPpt0rIYKvNdyWkaMYBMjspBErElm7j2lZzs.jpeg",
    },
    {
      id: "53",
      title: "North Sea Flood",
      category: "events",
      amount:
        "The North Sea flood of 1953 caused widespread devastation in the Netherlands, Belgium, and the United Kingdom.",
      date: new Date(1953, 0, 31),
      pic_url:
        "https://i0.wp.com/heritagecalling.com/wp-content/uploads/2023/01/EAW048241-5.jpg?resize=1440%2C580&ssl=1",
    },
    {
      id: "54",
      title: "Discovery of DNA Structure",
      category: "events",
      amount:
        "On February 28, 1953, James Watson and Francis Crick announced their discovery of the double-helix structure of DNA.",
      date: new Date(1953, 1, 28),
      pic_url:
        "https://www.exploratorium.edu/sites/default/files/blogs/exhibit-13.jpg",
    },
    {
      id: "55",
      title: "Sir Edmund Hillary Climbs Mount Everest",
      category: "events",
      amount:
        "On May 29, 1953, Sir Edmund Hillary and Tenzing Norgay became the first climbers confirmed to have reached the summit of Mount Everest.",
      date: new Date(1953, 4, 29),
      pic_url: "https://teara.govt.nz/files/p-10474-pc.jpg",
    },
    {
      id: "56",
      title: "John F. Kennedy Assassination",
      category: "events",
      amount:
        "On November 22, 1963, President John F. Kennedy was assassinated in Dallas, Texas, a tragedy that shocked the nation.",
      date: new Date(1963, 10, 22),
      pic_url:
        "https://m.economictimes.com/thumb/msid-96280101,width-1600,height-900,resizemode-4,imgsize-14968/us-national-archives-discloses-information-related-to-john-f-kennedy-assassination.jpg",
    },
    {
      id: "57",
      title: "March on Washington",
      category: "events",
      amount:
        "The March on Washington for Jobs and Freedom, where Martin Luther King Jr. delivered his 'I Have a Dream' speech, occurred on August 28, 1963.",
      date: new Date(1963, 7, 28),
      pic_url:
        "https://assets.editorial.aetnd.com/uploads/2009/10/march-on-washingon-hero.jpg",
    },
    {
      id: "58",
      title: "Beatlemania Begins",
      category: "events",
      amount:
        "The Beatles' rise to fame began in 1963, marking the start of Beatlemania, a cultural phenomenon that swept across the world.",
      date: new Date(1963, 0, 1),
      pic_url:
        "https://i.guim.co.uk/img/static/sys-images/Music/Pix/pictures/2012/11/28/1354113727187/The-Beatles-in-1963-009.jpg?width=620&quality=85&auto=format&fit=max&s=c12dc38199b6e4c94dac8e5c1a684af1",
    },
    {
      id: "59",
      title: "Assassination of Medgar Evers",
      category: "events",
      amount:
        "Medgar Evers, a civil rights activist, was assassinated on June 12, 1963, in Jackson, Mississippi.",
      date: new Date(1963, 5, 12),
      pic_url:
        "https://i.natgeofe.com/n/40821286-2ad0-4a90-b300-fdc7904fe256/medgar-evers-176587111_16x9.jpg",
    },
    {
      id: "60",
      title: "Valentina Tereshkova First Woman in Space",
      category: "events",
      amount:
        "Valentina Tereshkova, a Soviet cosmonaut, became the first woman to fly in space on June 16, 1963.",
      date: new Date(1963, 5, 16),
      pic_url: "https://cdn.mos.cms.futurecdn.net/UMrJ6JarwgPzBPCrL3Tcnn.jpg",
    },
    {
      id: "61",
      title: "Martin Luther King Jr. Receives Nobel Prize",
      category: "events",
      amount:
        "Martin Luther King Jr. was awarded the Nobel Peace Prize in 1964 for his efforts in advancing civil rights through nonviolence.",
      date: new Date(1964, 11, 10),
      pic_url:
        "https://i.insider.com/5c3e0baf01c0ea05b45fb182?width=600&format=jpeg&auto=webp",
    },
  ];


  const [expenses, setExpenses] = useState(Dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses(  (prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="mainpagebg"> 
      <Header/>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
