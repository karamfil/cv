var DATA;
DATA = {
  contacts: {
    details: {
      Name: 'Alexander Antonov Ivanov',
      Nickname: 'Karamfil',
      Address: 'Bulgaria, Sofia',
      Phone: '+359 888 492665',
      Email: 'a.ivanov@avalith.bg',
      'Date of birth': '26th August 1987'
    },
    img: '',
    bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede'
  },
  education: [
    {
      title: 'New Bulgarian University',
      date: {
        from: 'October 2009',
        to: 'July 2013'
      },
      degree: 'University',
      major: 'Computer Science, Bachelor'
    }, {
      title: 'PGTE "Henry Ford"',
      date: {
        from: 'September 2001',
        to: 'July 2006'
      },
      degree: 'High School',
      major: 'Automobiles'
    }
  ],
  events: [{
    title: 'Google IO 2011 Developer Conference ',
    date: {
      from: '10th May 2011',
      to: '11th May 2011'
    },
    desc: 'Invited by Google to present Historypin in the Developer Sandbox'
  }],
  skills: {
    'Languages': [[1996, 5, 'English'], [2007, 1, 'Japanese']],
    'Markup Languages': [[2001, 5, 'XML'], [1998, 5, 'HTML'], [2003, 5, 'xHTML'], [2011, 5, 'HTML5'], [2002, 5, 'CSS'], [2011, 5, 'CSS3']],
    'Programming Languages': [[2003, 5, 'JavaScript'], [1999, 5, 'PHP'], [2008, 4, 'Python'], [2009, 2, 'Ruby'], [2002, 2, 'ActionScript2'], [2009, 2, 'Java'], [2010, 2, 'C'], [2007, 1, 'C/C++'], [2012, 1, 'Haskell'], [2010, 1, 'Prolog'], [2013, 1, 'Erlang']],
    'PHP Frameworks and Libraries': [[2007, 5, 'Fwurks'], [2007, 3, 'CodeIgniter'], [2009, 2, 'CakePHP'], [2010, 2, 'Symphony'], [2011, 2, 'Yii']],
    'Python Frameworks and Libraries': [2009, 4, 'Django'],
    'Ruby Frameworks': [2010, 1, 'Ruby on Rails'],
    'JavaScript Frameworks and Libraries': [[2006, 5, 'JQuery'], [2008, 5, 'JQueryUI'], [2005, 3, 'Prototype'], [2006, 3, 'MooTools'], [2007, 3, 'Dojo'], [2008, 2, 'ExtJS']],
    'Storage Solutions': [[2000, 5, 'MySQL'], [2010, 5, 'MariaDB'], [2010, 5, 'Google BigTable'], [2010, 5, 'Google BlobStore'], [2007, 3, 'PostgreSQL'], [2007, 3, 'Amazon S3'], [2011, 2, 'MongoDB'], [2011, 1, 'CouchDB']],
    'Platforms': [[2009, 5, 'Google App Engine'], [2011, 2, 'Amazon Web Services']],
    'Version Control': [[2008, 4, 'SVN'], [2011, 5, 'Git']],
    'Design': [[2003, 3, 'Adobe Photoshop'], [2002, 3, 'Adobe Flash']],
    'Operation Systems': [[1995, 5, 'Windows'], [2007, 5, 'Linux - Gentoo'], [2008, 4, 'Linux - Ubuntu'], [2004, 4, 'Linux - Debian'], [2009, 3, 'MacOS']],
    'Services Integration': ['Flickr API', 'Amazon S3', 'PayPal', 'ePay', 'Facebook', 'OpenID', 'SAML']
  },
  freelance: [{
    2013: [{
      title: 'Fwurks v4',
      url: 'https://github.com/Avalith/Fwurks',
      description: 'PHP 5.5 Hierarchical-Model-View-Controller (HMVC) based framework with Object Relational Mapping (ORM), Active Record and Smarty template engine, multilingual support'
    }],
    2011: [{
      title: 'Architectural Studio Tectonis',
      url: 'http://www.tectonis.com/',
      description: 'TO BE DESCRIBED',
      tasks: ['System Architecture', 'Database Design', 'Client Side (PHP/MySQL)', 'Administration (PHP/MySQL using MVC framework)']
    }],
    2010: [
      {
        title: 'Fwurks v3 - Discontinued',
        url: 'https://github.com/Avalith/Fwurks',
        description: 'PHP 5.3 Hierarchical-Model-View-Controller (HMVC) based framework with Object Relational Mapping (ORM), Active Record and Smarty template engine, multilingual support'
      }, {
        title: 'M-Innovation',
        url: 'http://www.m-innovation.eu/',
        description: 'TO BE DESCRIBED',
        tasks: ['Project Management', 'Design', 'System Architecture', 'Database Design', 'Client Side (PHP/MySQL)', 'Administration (PHP/MySQL using MVC framework)', 'JavaScript Development', 'CSS/xHTML Development']
      }
    ],
    2009: [{
      title: 'Fwurks v2',
      url: 'https://github.com/Avalith/Fwurks',
      description: 'PHP 5.3 Model-View-Controller (MVC) based framework with Object Relational Mapping (ORM), Active Record and Smarty template engine, multilingual support'
    }],
    2008: [{
      title: 'Fwurks',
      url: 'https://github.com/Avalith/Fwurks',
      description: 'PHP 5 Model-View-Controller (MVC) based framework with Object Relational Mapping (ORM), Active Record and Smarty template engine, multilingual support'
    }],
    2007: [
      {
        title: 'Assistance Bulgaria',
        url: 'http://www.assistancebulgaria.com/',
        description: 'TO BE DESCRIBED',
        tasks: ['System Architecture', 'Database Design', 'Client Side (PHP/MySQL)', 'Administration (PHP/MySQL using MVC framework)']
      }, {
        title: 'B&N Consult',
        url: 'http://www.bnconsult.biz/',
        description: 'TO BE DESCRIBED',
        tasks: ['System Architecture', 'Database Design', 'Client Side (PHP/MySQL)', 'Administration (PHP/MySQL using MVC framework)']
      }
    ],
    2004: [{
      title: 'Yomi Engineering Ltd',
      url: 'http://www.yomibg.com/',
      description: 'TO BE DESCRIBED',
      tasks: ['Design', 'Flash Development']
    }]
  }],
  experience: [
    {
      company: 'Avalith',
      url: 'http://www.avalith.bg/',
      positions: [{
        position: 1,
        date: {
          from: 1,
          to: 2
        },
        tasks: ['Manage company', 'Manage web department & projects']
      }],
      projects: [{
        title: 'Drop The C-Bomb',
        url: 'http://',
        description: 'asd',
        tasks: ['System Architecture', 'Database Design'],
        awards: [['Webby', 2011, 'http://'], ['WebAward', 2011, 'http://']]
      }]
    }, {
      company: 'Avalith',
      url: 'http://www.avalith.bg/',
      positions: [{
        position: 1,
        date: {
          from: 1,
          to: 2
        },
        tasks: ['Manage company', 'Manage web department & projects']
      }],
      projects: [{
        title: 'Drop The C-Bomb',
        url: 'http://',
        description: 'asd',
        tasks: ['System Architecture', 'Database Design'],
        awards: [['Webby', 2011, 'http://'], ['WebAward', 2011, 'http://']]
      }]
    }, {
      company: 'Avalith',
      url: 'http://www.avalith.bg/',
      positions: [{
        position: 1,
        date: {
          from: 1,
          to: 2
        },
        tasks: ['Manage company', 'Manage web department & projects']
      }],
      projects: [{
        title: 'Drop The C-Bomb',
        url: 'http://',
        description: 'asd',
        tasks: ['System Architecture', 'Database Design'],
        awards: [['Webby', 2011, 'http://'], ['WebAward', 2011, 'http://']]
      }]
    }, {
      company: 'Epsilon Interactive International',
      url: 'http://www.epsilon.com/',
      positions: [{
        position: 'Creative Coder',
        date: {
          from: 'July 2006',
          to: 'April 2007'
        },
        tasks: ['Code HTML Emails and Newsletters', 'Design HTML Emails and Newsletters']
      }],
      projects: [{
        title: '',
        url: 'http://',
        description: '',
        tasks: ''
      }]
    }
  ]
};