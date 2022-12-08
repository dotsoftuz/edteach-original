// import Breadcrumb from 'kutty/src/breadcrumb';
import Link from 'next/link';
import React from 'react';
import { Sidebar, Breadcrumb } from 'components';
import { FiArrowUpRight } from 'react-icons/fi';

function Links(props) {
  const db = [
    {
      name: 'https://www.springernature.com/gp',
      link: 'Springer nature',
    },
    {
      name: 'https://scientist.com/',
      link: 'Scientist.com',
    },
    {
      name: 'https://www.mdpi.com/',
      link: 'MDPI',
    },
    {
      name: 'https://global.oup.com/?cc=uz',
      link: 'Cambridge University Press & Assessment',
    },
    {
      name: 'https://global.oup.com/?cc=uz',
      link: 'Oxford University Press',
    },
    {
      name: 'https://www.tandfonline.com/ ',
      link: 'Taylor & Francis Online',
    },
    {
      name: 'https://www.ariessys.com/ ',
      link: 'Aries systems',
    },
    {
      name: 'https://www.sciencedirect.com/',
      link: 'Springer Publishing',
    },
    {
      name: 'https://www.liebertpub.com/',
      link: 'Meri Enn Libert, Inc.',
    },
    {
      name: 'https://www.nature.com/',
      link: 'Nature',
    },
    {
      name: 'https://www.cambridge.org/',
      link: 'Cambridge',
    },
    {
      name: 'https://www.researchgate.net/',
      link: 'ResearchGate',
    },
    {
      name: 'https://www.proquest.com/',
      link: 'ProQuest',
    },
    {
      name: 'https://pubmed.ncbi.nlm.nih.gov/',
      link: 'PubMed',
    },
    {
      name: 'https://www.dart-europe.org/basic-search.php ',
      link: 'DART-Europe E-theses Portal',
    },
    {
      name: 'https://www.ebsco.com/products/research-databases/ebsco-open-dissertations',
      link: 'EBSCO',
    },
    {
      name: 'https://ethos.bl.uk/Home.do',
      link: 'EThOS (from the British Library)',
    },
    {
      name: 'https://iisc.ac.in/',
      link: 'Indian Institute of Science',
    },
    {
      name: 'https://shodhganga.inflibnet.ac.in/ ',
      link: 'Indian Theses and Dissertations (Shodhganga)',
    },
    {
      name: 'http://www.netd.ac.za/',
      link: 'National ETD Portal (South Africa)',
    },
    {
      name: 'https://ndltd.org/ ',
      link: 'Networked Digital Library of Theses and Dissertations OhioLINK ETD Center',
    },
    {
      name: 'https://etd.ohiolink.edu/  ',
      link: 'OhioLINK ETD Center',
    },
    {
      name: 'https://oatd.org/ ',
      link: 'Open Access Theses and Dissertations',
    },
    {
      name: 'https://www.bac-lac.gc.ca/fra/services/theses/Pages/theses-canada.aspx',
      link: 'Theses Canada',
    },
    {
      name: 'https://trove.nla.gov.au/ ',
      link: 'TROVE',
    },
    {
      name: 'https://catalog.crl.edu/Search/Results?filter%5b%5d=crl_scope:Dissertations&amp;redirect_src_path=/search~S4 ',
      link: 'Dissertations (Center for Research Libraries)',
    },
    {
      name: 'https://ucla.on.worldcat.org/discovery',
      link: 'Melvyl',
    },
    {
      name: 'https://searchworks.stanford.edu/catalog?f[genre_ssim][]=Thesis/Dissertation',
      link: 'Stanford University Libraries',
    },
    {
      name: 'https://guides.library.cornell.edu/dissertations/other ',
      link: 'Cornell University Library',
    },
    {
      name: 'https://csulb.libguides.com/freedatabases/dissertations',
      link: 'CSULB LibGuides',
    },
    {
      name: 'https://library.princeton.edu/research/databases/search/dissertation',
      link: 'Princeton University Library',
    },
    {
      name: 'https://ora.ox.ac.uk/',
      link: 'Oxford University Research Archive',
    },
    {
      name: 'http://etheses.lse.ac.uk/',
      link: 'LSE Theses Online',
    },
    {
      name: 'https://www.lib.cam.ac.uk/newton',
      link: 'Cambridge University Library Theses Catalogue',
    },
  ];

  return (
    <Sidebar>
      <Breadcrumb
        page="Asosiy sahifa"
        page2="Havolalar"
        link="/dashboard"
        active
      />

      <div className="md:pl-7 lg:pl-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-y-4 ">
        {db.map((item) => (
          <>
            <div className="relative w-[93%] mx-auto h-80 rounded-lg">
              <a href={item.name} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src="https://nextui.org/images/card-example-2.jpeg"
                  alt="image"
                />
                <div className="absolute rounded-b-lg p-2 flex items-center bottom-0 left-0 bg-white h-14 md:h-16 w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
                  <p className="font-semibold hover:underline text-sm">
                    {item.link}
                  </p>
                  <FiArrowUpRight className="absolute bottom-3 md:bottom-4 right-2 bg-white p-3 rounded-full text-4xl" />
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
    </Sidebar>
  );
}

export default Links;
