const body = document.querySelector('body');

const closeIcon = document.querySelector('#close-icon');

const bars = document.querySelector('#bars');

const speakerList = document.querySelector('#speakers-list');

bars.addEventListener('click', () => {
  body.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  body.classList.remove('active');
});

const createSpeaker = (speaker) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'speakers-list-item');
  const img = document.createElement('img');
  img.setAttribute('src', speaker.photoUrl);
  img.setAttribute('class', 'image');
  img.setAttribute('alt', 'image');
  const div = document.createElement('div');
  div.setAttribute('class', 'speakers-list-item__info');
  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'speakers-list-item__heading');
  h2.textContent = speaker.speakerName;
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'speakers-list-item__role');
  h3.textContent = speaker.role;
  const p = document.createElement('p');
  p.setAttribute('class', 'speakers-list-item__text');
  p.textContent = speaker.description;
  li.appendChild(img);
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(p);
  li.appendChild(div);
  return li;
};

if (speakerList) {
  const speakers = [
    {
      speakerName: 'Robert Farrell',
      role: 'Digital Marketing Trainer and Lecturer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Copy-of-Speakers-DLR-Summit-2019-5.png',
    },
    {
      speakerName: 'Robert Farrell',
      role: 'Digital Marketing Trainer and Lecturer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Copy-of-Speakers-DLR-Summit-2019-5.png',
    },
    {
      speakerName: 'Robert Farrell',
      role: 'Digital Marketing Trainer and Lecturer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Copy-of-Speakers-DLR-Summit-2019-5.png',
    },
    {
      speakerName: 'Robert Farrell',
      role: 'Digital Marketing Trainer and Lecturer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Copy-of-Speakers-DLR-Summit-2019-5.png',
    },
    {
      speakerName: 'Robert Farrell',
      role: 'Digital Marketing Trainer and Lecturer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Copy-of-Speakers-DLR-Summit-2019-5.png',
    },
    {
      speakerName: 'Robert Farrell',
      role: 'Digital Marketing Trainer and Lecturer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
      photoUrl: 'images/Copy-of-Speakers-DLR-Summit-2019-5.png',
    },
  ];
  for (let i = 0; i < speakers.length; i += 1) {
    const speakerItem = createSpeaker(speakers[i]);
    speakerList.appendChild(speakerItem);
  }
}
