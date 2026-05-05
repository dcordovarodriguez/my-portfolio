export type BuildingCoordinate = {
  lat: number;
  lng: number;
};

export type BuildingEntrance = {
  label: string;
  coords: BuildingCoordinate;
};

export type BuildingRoom = {
  roomNumber: string;
  entranceHint: string;
};

export type UcsdBuilding = {
  id: string;
  name: string;
  shortName: string;
  coords: BuildingCoordinate;
  address: string;
  area: string;
  entrances: BuildingEntrance[];
  rooms: BuildingRoom[];
  image: string;
};

export const UCSD_BUILDINGS: UcsdBuilding[] = [
  {
    id: "cognitive-science-building",
    name: "Cognitive Science Building",
    shortName: "CSB",
    coords: { lat: 32.88138, lng: -117.23464 },
    address: "9500 Gilman Drive, La Jolla, CA 92093",
    area: "Warren Mall",
    entrances: [
      {
        label: "Main glass entry facing Warren Mall",
        coords: { lat: 32.88143, lng: -117.23471 },
      },
      {
        label: "South side entry near the outdoor walkway",
        coords: { lat: 32.88119, lng: -117.23456 },
      },
    ],
    rooms: [
      {
        roomNumber: "001",
        entranceHint:
          "Enter through the main glass doors and continue straight into the ground-floor corridor.",
      },
      {
        roomNumber: "105",
        entranceHint:
          "Use the main entry, then take the first hallway on the right toward the classroom wing.",
      },
    ],
    image: "Soft blue exterior study landmark with glass facade.",
  },
  {
    id: "center-hall",
    name: "Center Hall",
    shortName: "CENTR",
    coords: { lat: 32.87963, lng: -117.23673 },
    address: "275 Rupertus Way, La Jolla, CA 92093",
    area: "Library Walk",
    entrances: [
      {
        label: "Front steps from Library Walk",
        coords: { lat: 32.87969, lng: -117.23668 },
      },
      {
        label: "North side doors near Ridge Walk",
        coords: { lat: 32.87974, lng: -117.23686 },
      },
    ],
    rooms: [
      {
        roomNumber: "101",
        entranceHint:
          "Take the front steps and enter from Library Walk. The lecture hall doors are directly ahead.",
      },
      {
        roomNumber: "216",
        entranceHint:
          "Use the north side doors if you are coming from Ridge Walk, then head upstairs to the second-floor classrooms.",
      },
    ],
    image: "Large lecture building with high traffic and central access points.",
  },
  {
    id: "warren-lecture-hall",
    name: "Warren Lecture Hall",
    shortName: "WLH",
    coords: { lat: 32.88192, lng: -117.23634 },
    address: "9500 Gilman Drive, La Jolla, CA 92093",
    area: "Warren College",
    entrances: [
      {
        label: "Main entry facing the Warren Mall slope",
        coords: { lat: 32.88193, lng: -117.23627 },
      },
      {
        label: "Lower terrace entry near the bike racks",
        coords: { lat: 32.88178, lng: -117.23645 },
      },
    ],
    rooms: [
      {
        roomNumber: "2001",
        entranceHint:
          "Use the main entry and stay on the ground level. The large lecture hall doors are on the left.",
      },
      {
        roomNumber: "2112",
        entranceHint:
          "Enter from the lower terrace if coming uphill, then follow signs toward the upper lecture seating area.",
      },
    ],
    image: "Tiered lecture venue with bold concrete forms and student traffic.",
  },
  {
    id: "price-center",
    name: "Price Center",
    shortName: "PC",
    coords: { lat: 32.87912, lng: -117.23639 },
    address: "9500 Gilman Drive, La Jolla, CA 92093",
    area: "Student Center",
    entrances: [
      {
        label: "East entrance from Library Walk",
        coords: { lat: 32.87904, lng: -117.23628 },
      },
      {
        label: "West entrance near Town Square",
        coords: { lat: 32.87913, lng: -117.23658 },
      },
    ],
    rooms: [
      {
        roomNumber: "The Loft",
        entranceHint:
          "Enter from Library Walk and take the central stairs to the upper social and event level.",
      },
      {
        roomNumber: "PC Ballroom West",
        entranceHint:
          "Use the west entrance if you are coming from Town Square, then continue toward the events corridor.",
      },
    ],
    image: "Busy student hub with dining, events, and layered circulation.",
  },
  {
    id: "geisel-library",
    name: "Geisel Library",
    shortName: "GEISEL",
    coords: { lat: 32.88101, lng: -117.23736 },
    address: "9500 Gilman Drive, La Jolla, CA 92093",
    area: "Library Walk",
    entrances: [
      {
        label: "Main entry plaza facing Snake Path",
        coords: { lat: 32.88095, lng: -117.23728 },
      },
      {
        label: "East lower-level entry near study terraces",
        coords: { lat: 32.88088, lng: -117.23748 },
      },
    ],
    rooms: [
      {
        roomNumber: "Auditorium",
        entranceHint:
          "Use the main entry plaza and follow interior signage down toward the event and lecture spaces.",
      },
      {
        roomNumber: "Seventh Floor East",
        entranceHint:
          "Enter through the main lobby, then take the elevators to the upper quiet study floors.",
      },
    ],
    image: "Iconic sci-fi library silhouette with layered terraces.",
  },
];
