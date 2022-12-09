
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

      <div className="flex gap-2 flex-wrap p-[20px]">
        {db.map((item) => (
          <>
            <a className="link-card" href={item.name} target="_blank" rel="noreferrer">
              {item.link}{' '}
              <div className='bg-white shadow-lg text-black p-2 rounded-full' id="link-icon" >
                <FiArrowUpRight className="text-xl" />
              </div>
            </a>
          </>
        ))}
      </div>
    </Sidebar>
  );
}

export default Links;
