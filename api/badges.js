export default async function handler(request, res) {
    const badges = [
      {
        name: 'Router Help with Adrian',
        department: 'Information Science and Technology',
        author: 'Adrian Hoover',
        icon: 'hardware:router',
      },
      {
        name: 'Samsung Galaxy Information Session',
        department: 'Information Science and Technology',
        author: 'Abel Chapman',
        icon: 'android',
      },
      {
        name: 'Solar Energy: Two Steps Forward One Step Back',
        department: 'Agricultural Sciences',
        author: 'Hayden Knapp',
        icon: 'image:wb-sunny',
      },
      {
        name: 'Contacting Carmen',
        department: 'College of Communications',
        author: 'Carmen Harding',
        icon: 'communication:textsms',
      },
      {
        name: 'Artificial Intelligence and Society',
        department: 'Information Science and Technology',
        author: 'Emily Jones',
        icon: 'device:brightness-auto',
      },
      {
        name: 'History of the American West',
        department: 'History',
        author: 'Samuel Brown',
        icon: 'gavel',
      },
      {
        name: 'Introduction to Calculus',
        department: 'Mathematics',
        author: 'Lila Patel',
        icon: 'add-circle',
      },
      {
        name: 'Sustainable Energy Systems',
        department: 'Environmental Science',
        author: 'Daniel Kim',
        icon: 'hardware:toys',
      },
      {
        name: 'Advanced Data Mining Techniques',
        department: 'Computer Science',
        author: 'Jasmine Lee',
        icon: 'hardware:memory',
      },
      {
        name: 'Biodiversity Conservation',
        department: 'Biology',
        author: 'Ryan Clark',
        icon: 'image:filter-vintage',
      },
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,OPTIONS,PATCH,DELETE,POST,PUT'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    res.json(badges);
  }