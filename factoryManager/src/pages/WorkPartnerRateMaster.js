import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import axios from 'axios';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Tab,
  Tabs,
} from '@mui/material';
import { useSelector } from 'react-redux';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Page from '../components/Page';
// import Date from '../components/Date';

const RateMaster = () => {
  const longServices = useSelector((state) => state.workPartnerLongService.workPartnerLongServices) || [];
  console.log(longServices);
  const shortServices = useSelector((state) => state.workPartnerShortService.workPartnerShortServices) || [];
  console.log(shortServices);
  const addOnServices = useSelector((state) => state.workPartnerAddOnService.workPartnerAddOnServices) || [];

  const [bill, setBill] = useState({
    installationArea: '',
    lightConnection: '',
    floatingShelf: '',
    total: '',
  });

  const [rateMasterData, setRateMasterData] = useState({
    state: '',
    district: '',
    pincode: '',
    serviceType: '',
    name: '',
    installationtype: '',
    installationArea: '',
    lightConnection: '',
    floatingShelf: '',
  });

  const statesData = [
    {
      state: 'Andhra Pradesh',
      districts: [
        'Anantapur',
        'Chittoor',
        'East Godavari',
        'Guntur',
        'Krishna',
        'Kurnool',
        'Nellore',
        'Prakasam',
        'Srikakulam',
        'Visakhapatnam',
        'Vizianagaram',
        'West Godavari',
        'YSR Kadapa',
      ],
    },
    {
      state: 'Arunachal Pradesh',
      districts: [
        'Tawang',
        'West Kameng',
        'East Kameng',
        'Papum Pare',
        'Kurung Kumey',
        'Kra Daadi',
        'Lower Subansiri',
        'Upper Subansiri',
        'West Siang',
        'East Siang',
        'Siang',
        'Upper Siang',
        'Lower Siang',
        'Lower Dibang Valley',
        'Dibang Valley',
        'Anjaw',
        'Lohit',
        'Namsai',
        'Changlang',
        'Tirap',
        'Longding',
      ],
    },
    {
      state: 'Assam',
      districts: [
        'Baksa',
        'Barpeta',
        'Biswanath',
        'Bongaigaon',
        'Cachar',
        'Charaideo',
        'Chirang',
        'Darrang',
        'Dhemaji',
        'Dhubri',
        'Dibrugarh',
        'Goalpara',
        'Golaghat',
        'Hailakandi',
        'Hojai',
        'Jorhat',
        'Kamrup Metropolitan',
        'Kamrup',
        'Karbi Anglong',
        'Karimganj',
        'Kokrajhar',
        'Lakhimpur',
        'Majuli',
        'Morigaon',
        'Nagaon',
        'Nalbari',
        'Dima Hasao',
        'Sivasagar',
        'Sonitpur',
        'South Salmara-Mankachar',
        'Tinsukia',
        'Udalguri',
        'West Karbi Anglong',
      ],
    },
    {
      state: 'Bihar',
      districts: [
        'Araria',
        'Arwal',
        'Aurangabad',
        'Banka',
        'Begusarai',
        'Bhagalpur',
        'Bhojpur',
        'Buxar',
        'Darbhanga',
        'East Champaran (Motihari)',
        'Gaya',
        'Gopalganj',
        'Jamui',
        'Jehanabad',
        'Kaimur (Bhabua)',
        'Katihar',
        'Khagaria',
        'Kishanganj',
        'Lakhisarai',
        'Madhepura',
        'Madhubani',
        'Munger (Monghyr)',
        'Muzaffarpur',
        'Nalanda',
        'Nawada',
        'Patna',
        'Purnia (Purnea)',
        'Rohtas',
        'Saharsa',
        'Samastipur',
        'Saran',
        'Sheikhpura',
        'Sheohar',
        'Sitamarhi',
        'Siwan',
        'Supaul',
        'Vaishali',
        'West Champaran',
      ],
    },
    {
      state: 'Chandigarh (UT)',
      districts: ['Chandigarh'],
    },
    {
      state: 'Chhattisgarh',
      districts: [
        'Balod',
        'Baloda Bazar',
        'Balrampur',
        'Bastar',
        'Bemetara',
        'Bijapur',
        'Bilaspur',
        'Dantewada (South Bastar)',
        'Dhamtari',
        'Durg',
        'Gariyaband',
        'Janjgir-Champa',
        'Jashpur',
        'Kabirdham (Kawardha)',
        'Kanker (North Bastar)',
        'Kondagaon',
        'Korba',
        'Korea (Koriya)',
        'Mahasamund',
        'Mungeli',
        'Narayanpur',
        'Raigarh',
        'Raipur',
        'Rajnandgaon',
        'Sukma',
        'Surajpur  ',
        'Surguja',
      ],
    },
    {
      state: 'Dadra and Nagar Haveli (UT)',
      districts: ['Dadra & Nagar Haveli'],
    },
    {
      state: 'Daman and Diu (UT)',
      districts: ['Daman', 'Diu'],
    },
    {
      state: 'Delhi (NCT)',
      districts: [
        'Central Delhi',
        'East Delhi',
        'New Delhi',
        'North Delhi',
        'North East  Delhi',
        'North West  Delhi',
        'Shahdara',
        'South Delhi',
        'South East Delhi',
        'South West  Delhi',
        'West Delhi',
      ],
    },
    {
      state: 'Goa',
      districts: ['North Goa', 'South Goa'],
    },
    {
      state: 'Gujarat',
      districts: [
        'Ahmedabad',
        'Amreli',
        'Anand',
        'Aravalli',
        'Banaskantha (Palanpur)',
        'Bharuch',
        'Bhavnagar',
        'Botad',
        'Chhota Udepur',
        'Dahod',
        'Dangs (Ahwa)',
        'Devbhoomi Dwarka',
        'Gandhinagar',
        'Gir Somnath',
        'Jamnagar',
        'Junagadh',
        'Kachchh',
        'Kheda (Nadiad)',
        'Mahisagar',
        'Mehsana',
        'Morbi',
        'Narmada (Rajpipla)',
        'Navsari',
        'Panchmahal (Godhra)',
        'Patan',
        'Porbandar',
        'Rajkot',
        'Sabarkantha (Himmatnagar)',
        'Surat',
        'Surendranagar',
        'Tapi (Vyara)',
        'Vadodara',
        'Valsad',
      ],
    },
    {
      state: 'Haryana',
      districts: [
        'Ambala',
        'Bhiwani',
        'Charkhi Dadri',
        'Faridabad',
        'Fatehabad',
        'Gurgaon',
        'Hisar',
        'Jhajjar',
        'Jind',
        'Kaithal',
        'Karnal',
        'Kurukshetra',
        'Mahendragarh',
        'Mewat',
        'Palwal',
        'Panchkula',
        'Panipat',
        'Rewari',
        'Rohtak',
        'Sirsa',
        'Sonipat',
        'Yamunanagar',
      ],
    },
    {
      state: 'Himachal Pradesh',
      districts: [
        'Bilaspur',
        'Chamba',
        'Hamirpur',
        'Kangra',
        'Kinnaur',
        'Kullu',
        'Lahaul &amp; Spiti',
        'Mandi',
        'Shimla',
        'Sirmaur (Sirmour)',
        'Solan',
        'Una',
      ],
    },
    {
      state: 'Jammu and Kashmir',
      districts: [
        'Anantnag',
        'Bandipore',
        'Baramulla',
        'Budgam',
        'Doda',
        'Ganderbal',
        'Jammu',
        'Kargil',
        'Kathua',
        'Kishtwar',
        'Kulgam',
        'Kupwara',
        'Leh',
        'Poonch',
        'Pulwama',
        'Rajouri',
        'Ramban',
        'Reasi',
        'Samba',
        'Shopian',
        'Srinagar',
        'Udhampur',
      ],
    },
    {
      state: 'Jharkhand',
      districts: [
        'Bokaro',
        'Chatra',
        'Deoghar',
        'Dhanbad',
        'Dumka',
        'East Singhbhum',
        'Garhwa',
        'Giridih',
        'Godda',
        'Gumla',
        'Hazaribag',
        'Jamtara',
        'Khunti',
        'Koderma',
        'Latehar',
        'Lohardaga',
        'Pakur',
        'Palamu',
        'Ramgarh',
        'Ranchi',
        'Sahibganj',
        'Seraikela-Kharsawan',
        'Simdega',
        'West Singhbhum',
      ],
    },
    {
      state: 'Karnataka',
      districts: [
        'Bagalkot',
        'Ballari (Bellary)',
        'Belagavi (Belgaum)',
        'Bengaluru (Bangalore) Rural',
        'Bengaluru (Bangalore) Urban',
        'Bidar',
        'Chamarajanagar',
        'Chikballapur',
        'Chikkamagaluru (Chikmagalur)',
        'Chitradurga',
        'Dakshina Kannada',
        'Davangere',
        'Dharwad',
        'Gadag',
        'Hassan',
        'Haveri',
        'Kalaburagi (Gulbarga)',
        'Kodagu',
        'Kolar',
        'Koppal',
        'Mandya',
        'Mysuru (Mysore)',
        'Raichur',
        'Ramanagara',
        'Shivamogga (Shimoga)',
        'Tumakuru (Tumkur)',
        'Udupi',
        'Uttara Kannada (Karwar)',
        'Vijayapura (Bijapur)',
        'Yadgir',
      ],
    },
    {
      state: 'Kerala',
      districts: [
        'Alappuzha',
        'Ernakulam',
        'Idukki',
        'Kannur',
        'Kasaragod',
        'Kollam',
        'Kottayam',
        'Kozhikode',
        'Malappuram',
        'Palakkad',
        'Pathanamthitta',
        'Thiruvananthapuram',
        'Thrissur',
        'Wayanad',
      ],
    },
    {
      state: 'Lakshadweep (UT)',
      districts: [
        'Agatti',
        'Amini',
        'Androth',
        'Bithra',
        'Chethlath',
        'Kavaratti',
        'Kadmath',
        'Kalpeni',
        'Kilthan',
        'Minicoy',
      ],
    },
    {
      state: 'Madhya Pradesh',
      districts: [
        'Agar Malwa',
        'Alirajpur',
        'Anuppur',
        'Ashoknagar',
        'Balaghat',
        'Barwani',
        'Betul',
        'Bhind',
        'Bhopal',
        'Burhanpur',
        'Chhatarpur',
        'Chhindwara',
        'Damoh',
        'Datia',
        'Dewas',
        'Dhar',
        'Dindori',
        'Guna',
        'Gwalior',
        'Harda',
        'Hoshangabad',
        'Indore',
        'Jabalpur',
        'Jhabua',
        'Katni',
        'Khandwa',
        'Khargone',
        'Mandla',
        'Mandsaur',
        'Morena',
        'Narsinghpur',
        'Neemuch',
        'Panna',
        'Raisen',
        'Rajgarh',
        'Ratlam',
        'Rewa',
        'Sagar',
        'Satna',
        'Sehore',
        'Seoni',
        'Shahdol',
        'Shajapur',
        'Sheopur',
        'Shivpuri',
        'Sidhi',
        'Singrauli',
        'Tikamgarh',
        'Ujjain',
        'Umaria',
        'Vidisha',
      ],
    },
    {
      state: 'Maharashtra',
      districts: [
        'Ahmednagar',
        'Akola',
        'Amravati',
        'Aurangabad',
        'Beed',
        'Bhandara',
        'Buldhana',
        'Chandrapur',
        'Dhule',
        'Gadchiroli',
        'Gondia',
        'Hingoli',
        'Jalgaon',
        'Jalna',
        'Kolhapur',
        'Latur',
        'Mumbai City',
        'Mumbai Suburban',
        'Nagpur',
        'Nanded',
        'Nandurbar',
        'Nashik',
        'Osmanabad',
        'Palghar',
        'Parbhani',
        'Pune',
        'Raigad',
        'Ratnagiri',
        'Sangli',
        'Satara',
        'Sindhudurg',
        'Solapur',
        'Thane',
        'Wardha',
        'Washim',
        'Yavatmal',
      ],
    },
    {
      state: 'Manipur',
      districts: [
        'Bishnupur',
        'Chandel',
        'Churachandpur',
        'Imphal East',
        'Imphal West',
        'Jiribam',
        'Kakching',
        'Kamjong',
        'Kangpokpi',
        'Noney',
        'Pherzawl',
        'Senapati',
        'Tamenglong',
        'Tengnoupal',
        'Thoubal',
        'Ukhrul',
      ],
    },
    {
      state: 'Meghalaya',
      districts: [
        'East Garo Hills',
        'East Jaintia Hills',
        'East Khasi Hills',
        'North Garo Hills',
        'Ri Bhoi',
        'South Garo Hills',
        'South West Garo Hills ',
        'South West Khasi Hills',
        'West Garo Hills',
        'West Jaintia Hills',
        'West Khasi Hills',
      ],
    },
    {
      state: 'Mizoram',
      districts: ['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip'],
    },
    {
      state: 'Nagaland',
      districts: [
        'Dimapur',
        'Kiphire',
        'Kohima',
        'Longleng',
        'Mokokchung',
        'Mon',
        'Peren',
        'Phek',
        'Tuensang',
        'Wokha',
        'Zunheboto',
      ],
    },
    {
      state: 'Odisha',
      districts: [
        'Angul',
        'Balangir',
        'Balasore',
        'Bargarh',
        'Bhadrak',
        'Boudh',
        'Cuttack',
        'Deogarh',
        'Dhenkanal',
        'Gajapati',
        'Ganjam',
        'Jagatsinghapur',
        'Jajpur',
        'Jharsuguda',
        'Kalahandi',
        'Kandhamal',
        'Kendrapara',
        'Kendujhar (Keonjhar)',
        'Khordha',
        'Koraput',
        'Malkangiri',
        'Mayurbhanj',
        'Nabarangpur',
        'Nayagarh',
        'Nuapada',
        'Puri',
        'Rayagada',
        'Sambalpur',
        'Sonepur',
        'Sundargarh',
      ],
    },
    {
      state: 'Puducherry (UT)',
      districts: ['Karaikal', 'Mahe', 'Pondicherry', 'Yanam'],
    },
    {
      state: 'Punjab',
      districts: [
        'Amritsar',
        'Barnala',
        'Bathinda',
        'Faridkot',
        'Fatehgarh Sahib',
        'Fazilka',
        'Ferozepur',
        'Gurdaspur',
        'Hoshiarpur',
        'Jalandhar',
        'Kapurthala',
        'Ludhiana',
        'Mansa',
        'Moga',
        'Muktsar',
        'Nawanshahr (Shahid Bhagat Singh Nagar)',
        'Pathankot',
        'Patiala',
        'Rupnagar',
        'Sahibzada Ajit Singh Nagar (Mohali)',
        'Sangrur',
        'Tarn Taran',
      ],
    },
    {
      state: 'Rajasthan',
      districts: [
        'Ajmer',
        'Alwar',
        'Banswara',
        'Baran',
        'Barmer',
        'Bharatpur',
        'Bhilwara',
        'Bikaner',
        'Bundi',
        'Chittorgarh',
        'Churu',
        'Dausa',
        'Dholpur',
        'Dungarpur',
        'Hanumangarh',
        'Jaipur',
        'Jaisalmer',
        'Jalore',
        'Jhalawar',
        'Jhunjhunu',
        'Jodhpur',
        'Karauli',
        'Kota',
        'Nagaur',
        'Pali',
        'Pratapgarh',
        'Rajsamand',
        'Sawai Madhopur',
        'Sikar',
        'Sirohi',
        'Sri Ganganagar',
        'Tonk',
        'Udaipur',
      ],
    },
    {
      state: 'Sikkim',
      districts: ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],
    },
    {
      state: 'Tamil Nadu',
      districts: [
        'Ariyalur',
        'Chennai',
        'Coimbatore',
        'Cuddalore',
        'Dharmapuri',
        'Dindigul',
        'Erode',
        'Kanchipuram',
        'Kanyakumari',
        'Karur',
        'Krishnagiri',
        'Madurai',
        'Nagapattinam',
        'Namakkal',
        'Nilgiris',
        'Perambalur',
        'Pudukkottai',
        'Ramanathapuram',
        'Salem',
        'Sivaganga',
        'Thanjavur',
        'Theni',
        'Thoothukudi (Tuticorin)',
        'Tiruchirappalli',
        'Tirunelveli',
        'Tiruppur',
        'Tiruvallur',
        'Tiruvannamalai',
        'Tiruvarur',
        'Vellore',
        'Viluppuram',
        'Virudhunagar',
      ],
    },
    {
      state: 'Telangana',
      districts: [
        'Adilabad',
        'Bhadradri Kothagudem',
        'Hyderabad',
        'Jagtial',
        'Jangaon',
        'Jayashankar Bhoopalpally',
        'Jogulamba Gadwal',
        'Kamareddy',
        'Karimnagar',
        'Khammam',
        'Komaram Bheem Asifabad',
        'Mahabubabad',
        'Mahabubnagar',
        'Mancherial',
        'Medak',
        'Medchal',
        'Nagarkurnool',
        'Nalgonda',
        'Nirmal',
        'Nizamabad',
        'Peddapalli',
        'Rajanna Sircilla',
        'Rangareddy',
        'Sangareddy',
        'Siddipet',
        'Suryapet',
        'Vikarabad',
        'Wanaparthy',
        'Warangal (Rural)',
        'Warangal (Urban)',
        'Yadadri Bhuvanagiri',
      ],
    },
    {
      state: 'Tripura',
      districts: [
        'Dhalai',
        'Gomati',
        'Khowai',
        'North Tripura',
        'Sepahijala',
        'South Tripura',
        'Unakoti',
        'West Tripura',
      ],
    },
    {
      state: 'Uttarakhand',
      districts: [
        'Almora',
        'Bageshwar',
        'Chamoli',
        'Champawat',
        'Dehradun',
        'Haridwar',
        'Nainital',
        'Pauri Garhwal',
        'Pithoragarh',
        'Rudraprayag',
        'Tehri Garhwal',
        'Udham Singh Nagar',
        'Uttarkashi',
      ],
    },
    {
      state: 'Uttar Pradesh',
      districts: [
        'Agra',
        'Aligarh',
        'Allahabad',
        'Ambedkar Nagar',
        'Amethi (Chatrapati Sahuji Mahraj Nagar)',
        'Amroha (J.P. Nagar)',
        'Auraiya',
        'Azamgarh',
        'Baghpat',
        'Bahraich',
        'Ballia',
        'Balrampur',
        'Banda',
        'Barabanki',
        'Bareilly',
        'Basti',
        'Bhadohi',
        'Bijnor',
        'Budaun',
        'Bulandshahr',
        'Chandauli',
        'Chitrakoot',
        'Deoria',
        'Etah',
        'Etawah',
        'Faizabad',
        'Farrukhabad',
        'Fatehpur',
        'Firozabad',
        'Gautam Buddha Nagar',
        'Ghaziabad',
        'Ghazipur',
        'Gonda',
        'Gorakhpur',
        'Hamirpur',
        'Hapur (Panchsheel Nagar)',
        'Hardoi',
        'Hathras',
        'Jalaun',
        'Jaunpur',
        'Jhansi',
        'Kannauj',
        'Kanpur Dehat',
        'Kanpur Nagar',
        'Kanshiram Nagar (Kasganj)',
        'Kaushambi',
        'Kushinagar (Padrauna)',
        'Lakhimpur - Kheri',
        'Lalitpur',
        'Lucknow',
        'Maharajganj',
        'Mahoba',
        'Mainpuri',
        'Mathura',
        'Mau',
        'Meerut',
        'Mirzapur',
        'Moradabad',
        'Muzaffarnagar',
        'Pilibhit',
        'Pratapgarh',
        'RaeBareli',
        'Rampur',
        'Saharanpur',
        'Sambhal (Bhim Nagar)',
        'Sant Kabir Nagar',
        'Shahjahanpur',
        'Shamali (Prabuddh Nagar)',
        'Shravasti',
        'Siddharth Nagar',
        'Sitapur',
        'Sonbhadra',
        'Sultanpur',
        'Unnao',
        'Varanasi',
      ],
    },
    {
      state: 'West Bengal',
      districts: [
        'Alipurduar',
        'Bankura',
        'Birbhum',
        'Burdwan (Bardhaman)',
        'Cooch Behar',
        'Dakshin Dinajpur (South Dinajpur)',
        'Darjeeling',
        'Hooghly',
        'Howrah',
        'Jalpaiguri',
        'Kalimpong',
        'Kolkata',
        'Malda',
        'Murshidabad',
        'Nadia',
        'North 24 Parganas',
        'Paschim Medinipur (West Medinipur)',
        'Purba Medinipur (East Medinipur)',
        'Purulia',
        'South 24 Parganas',
        'Uttar Dinajpur (North Dinajpur)',
      ],
    },
  ];

  const longService = ['Kitchen Installation', 'Wardrobe Installation'];

  const shortService = ['Site Survey', 'Product Service'];

  const camelCase = (str) => {
    return str
      .split(' ')
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  };

  const [addOnServiceData, setAddOnServiceData] = useState({
    materialShifting: false,
    videoRecording: false,
    liveStreaming: false,
  });

  const handleAddOnServiceChange = (e) => {
    setAddOnServiceData({
      ...addOnServiceData,
      [e.target.name]: e.target.checked,
    });
    console.log(addOnServiceData);
  };

  const [longServiceBill, setlongServiceBill] = useState(false);
  const [shortServiceBill, setshortServiceBill] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setRateMasterData({ ...rateMasterData, [input.name]: input.value });
    console.log(rateMasterData);
    setlongServiceBill(false);
    setshortServiceBill(false);
  };

  const handleStateChange = (e) => {
    setRateMasterData({ ...rateMasterData, state: e.target.value });
    console.log(rateMasterData);
    setlongServiceBill(false);
    setshortServiceBill(false);
  };

  const handleDistrictChange = (e) => {
    setRateMasterData({ ...rateMasterData, district: e.target.value });
    console.log(rateMasterData);
    setlongServiceBill(false);
    setshortServiceBill(false);
  };

  const handleServiceChange = (e) => {
    setRateMasterData({ ...rateMasterData, name: e.target.value });
    console.log(rateMasterData);
    setlongServiceBill(false);
    setshortServiceBill(false);
  };

  const handleServiceTypeChange = (e) => {
    setRateMasterData({ ...rateMasterData, serviceType: e.target.value });
    console.log(rateMasterData);
    setlongServiceBill(false);
    setshortServiceBill(false);
  };

  const handleInstallationTypeChange = (e) => {
    setRateMasterData({ ...rateMasterData, installationtype: e.target.value });
    console.log(rateMasterData);
    setlongServiceBill(false);
    setshortServiceBill(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (rateMasterData.serviceType === 'Long Service') {
        console.log(rateMasterData);
        const data = await longServices
          .filter((service) => service.name === rateMasterData.name)
          .filter((service) => service.serviceType === rateMasterData.serviceType)
          .filter((service) => service.installationtype === rateMasterData.installationtype);
        console.log(data);
        let addOnServiceTotal = 0;
        addOnServices.forEach((service) => {
          const serviceName = camelCase(service.name);
          if (addOnServiceData[serviceName]) {
            addOnServiceTotal += parseInt(service.rates, 10);
          }
        });
        console.log(addOnServiceTotal);
        setBill({
          ...bill,
          floatingShelf: data[0].floatingShelf * parseInt(rateMasterData.floatingShelf, 10),
          installationArea: data[0].installationArea * parseInt(rateMasterData.installationArea, 10),
          lightConnection: data[0].lightConnection * parseInt(rateMasterData.lightConnection, 10),
          total:
            data[0].installationArea * parseInt(rateMasterData.installationArea, 10) +
            data[0].floatingShelf * parseInt(rateMasterData.floatingShelf, 10) +
            data[0].lightConnection * parseInt(rateMasterData.lightConnection, 10) +
            addOnServiceTotal,
        });
        if (rateMasterData.state !== 'Delhi (NCT)') {
          setBill({
            ...bill,
            total:
              data[0].installationArea * parseInt(rateMasterData.installationArea, 10) +
              data[0].floatingShelf * parseInt(rateMasterData.floatingShelf, 10) +
              data[0].lightConnection * parseInt(rateMasterData.lightConnection, 10) +
              1150 +
              addOnServiceTotal,
          });
        }
        setlongServiceBill(true);
      } else {
        console.log(rateMasterData);
        const data = await shortServices.filter((service) => service.name === rateMasterData.name);
        console.log(data);
        let addOnServiceTotal = 0;
        addOnServices.forEach((service) => {
          const serviceName = camelCase(service.name);
          if (addOnServiceData[serviceName]) {
            addOnServiceTotal += parseInt(service.rates, 10);
          }
        });
        console.log(addOnServiceTotal);

        if (rateMasterData.state === 'Delhi (NCT)') {
          setBill({
            ...bill,
            total: data[0].delhi + addOnServiceTotal,
          });
        } else if (rateMasterData.state === 'Maharashtra') {
          setBill({
            ...bill,
            total: data[0].availableCities + addOnServiceTotal,
          });
        } else {
          setBill({
            ...bill,
            total: data[0].notAvailableCities + data[0].food + data[0].localFair + addOnServiceTotal,
            food: data[0].food,
            localFair: data[0].localFair,
          });
        }
        setshortServiceBill(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(bill);

  return (
    <>
      <Page title="User">
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Work Partner Cost Calculator
          </Typography>
          <Button variant="contained" sx={{textTransform:'none'}}>
            <PrintOutlinedIcon sx={{mr:1}}/>
            Print
          </Button>
        </Stack>
          <Card sx={{ p: 2 }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    label="State"
                    variant="outlined"
                    fullWidth
                    name="state"
                    value={rateMasterData.state}
                    onChange={handleStateChange}
                    MenuProps={{
                        PaperProps: {
                        sx:{
                          maxHeight: 300,
                          "&::-webkit-scrollbar": {
                            width: 8,
                          },
                          "&::-webkit-scrollbar-track": {
                            backgroundColor: 'primary.lighter',
                            borderRadius: 2,
                          },
                          "&::-webkit-scrollbar-thumb": {
                            backgroundColor: 'primary.main',
                            borderRadius: 2,
                            border: '1px solid #fff',
                          },
                        }
                      }
                      }}
                  >
                    <MenuItem defaultValue="">Select State</MenuItem>
                    {statesData.map((state, index) => {
                      return (
                        <MenuItem value={state.state} key={index}>
                          {state.state}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">District</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    label="District"
                    fullWidth
                    name="district"
                    value={rateMasterData.district}
                    onChange={handleDistrictChange}
                    MenuProps={{
                        PaperProps: {
                        sx:{
                          maxHeight: 300,
                          "&::-webkit-scrollbar": {
                            width: 8,
                          },
                          "&::-webkit-scrollbar-track": {
                            backgroundColor: 'primary.lighter',
                            borderRadius: 2,
                          },
                          "&::-webkit-scrollbar-thumb": {
                            backgroundColor: 'primary.main',
                            borderRadius: 2,
                            border: '1px solid #fff',
                          },
                        }
                      }
                      }}
                  >
                    <MenuItem defaultValue="">Select District</MenuItem>
                    {statesData
                      .filter((state) => state.state === rateMasterData.state)
                      .map((state) => {
                        return state.districts.map((district, index) => {
                          return (
                            <MenuItem value={district} key={index}>
                              {district}
                            </MenuItem>
                          );
                        });
                      })}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <TextField
                  required
                  label="Pincode"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: { md: 1 } }}
                  type="number"
                  name="pincode"
                  value={rateMasterData.pincode}
                  onChange={handleChange}
                />
                <FormControl sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Service Type</InputLabel>
                  <Select
                    id="demo-simple-select"
                    labelId="demo-simple-select-autowidth-label"
                    label="Service Type"
                    value={rateMasterData.serviceType}
                    onChange={handleServiceTypeChange}
                    name="serviceType"
                  >
                    <MenuItem defaultValue="">Select Service Type</MenuItem>
                    <MenuItem value="Long Service">Long Service</MenuItem>
                    <MenuItem value="Short Service">Short Service</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                <FormControl sx={{ width: '100%', mr: { md: 1 } }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Service Name</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    label="Service Name"
                    // value={workPartnerAdminInfo.tools}
                    onChange={handleServiceChange}
                    name="name"
                  >
                    <MenuItem defaultValue="">Select Service Name</MenuItem>
                    {rateMasterData.serviceType === 'Long Service'
                      ? longService.map((service, index) => (
                          <MenuItem key={index} value={service}>
                            {service}
                          </MenuItem>
                        ))
                      : shortService.map((service, index) => (
                          <MenuItem key={index} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                  </Select>
                </FormControl>
                {rateMasterData.serviceType === 'Long Service' ? (
                  <FormControl sx={{ width: '100%', ml: { md: 1 }, mt: { xs: 2, md: 0 } }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Installation Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      label="Installation Type"
                      // value={workPartnerAdminInfo.tools}
                      onChange={handleInstallationTypeChange}
                      name="installationtype"
                    >
                      <MenuItem defaultValue="">Select Installation Type</MenuItem>
                      <MenuItem value="Assembled/Flat Pack/Mixed But Machined Product Installation Rates">
                        Assembled/Flat Pack/Mixed But Machined Product Installation Rates
                      </MenuItem>
                      <MenuItem value="Mixed & Incomplete/ No Machined Rates">
                        Mixed & Incomplete/ No Machined Rates
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <Box sx={{ ml: { md: 1 }, width: '100%' }} />
                )}
              </Box>
              {rateMasterData.serviceType === 'Long Service' ? (
                <>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                    <TextField
                      label="Installable Area (Sqft)"
                      variant="outlined"
                      fullWidth
                      sx={{ mr: { md: 1 } }}
                      type="number"
                      name="installationArea"
                      value={rateMasterData.installationArea}
                      onChange={handleChange}
                    />
                    <TextField
                      label="Light Connection (per Pc)"
                      variant="outlined"
                      fullWidth
                      sx={{ ml: { md: 1 }, mt: { xs: 2, md: 0 } }}
                      type="number"
                      name="lightConnection"
                      value={rateMasterData.lightConnection}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 2 }}>
                    <TextField
                      label="Floating Shelf (per Pc)"
                      variant="outlined"
                      fullWidth
                      sx={{ mr: { md: 1 } }}
                      type="number"
                      name="floatingShelf"
                      value={rateMasterData.floatingShelf}
                      onChange={handleChange}
                    />
                    <Box sx={{ ml: { md: 1 }, width: '100%' }} />
                  </Box>
                </>
              ) : null}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                  <FormLabel component="legend">
                    <Typography variant="h6">Add On Services</Typography>
                  </FormLabel>
                  <FormGroup>
                    {addOnServices.map((service, index) => {
                      // const serviceName = service.name.split(' ').map((word, index)=>{
                      //   if(index === 0){
                      //     return word.toLowerCase();
                      //   }
                      //   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                      // }).join('');

                      const serviceName = camelCase(service.name);
                      return (
                        <Card
                          sx={{
                            mt: 1,
                            mb: 1,
                            p: 2,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: addOnServiceData[serviceName] ? 'primary.main' : '#fff',
                            color: addOnServiceData[serviceName] ? 'primary.contrastText' : null,
                          }}
                        >
                          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box>
                              <Checkbox
                                checked={addOnServiceData[serviceName]}
                                onChange={handleAddOnServiceChange}
                                name={serviceName}
                                color="tertiary"
                                checkedIcon={<CheckCircleOutlinedIcon fontSize='large'/>}
                                icon={<RadioButtonUncheckedOutlinedIcon fontSize='large'/>}
                              />
                            </Box>
                            <Box>
                              <Typography variant="h6">{service.name}</Typography>
                              <Typography variant="subtitle2">{service.note}</Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Typography variant="subtitle1">₹{service.rates}</Typography>
                          </Box>
                        </Card>
                      );
                    })}
                  </FormGroup>
                </FormControl>
                <Box sx={{ width: '100%', ml: { md: 1 } }} />
              </Box>
              <Box sx={{mt:1}}>
                <Button variant="contained" color="primary" type="submit">
                  Proceed to billing
                </Button>
              </Box>
            </form>
          </Card>
          {longServiceBill ? (
            <Card
              sx={{
                p: 2,
                mt: 4,
                backgroundColor: 'primary.lighter',
                border: '1px solid',
                borderColor: 'primary.light',
              }}
            >
              <Box>
                <Typography variant="h5" gutterBottom component="div">
                  Payment Summary
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Box>
                    <Typography variant="h6" gutterBottom component="div">
                      Order Details
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Service Type: </strong>
                      {rateMasterData.serviceType}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Service Name: </strong>
                      {rateMasterData.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Installation Type: </strong>
                      {rateMasterData.installationtype}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Installable Area: </strong>
                      {rateMasterData.installationArea} Sqft
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Light Connection: </strong>
                      {rateMasterData.lightConnection} per Pc
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Floating Shelf: </strong>
                      {rateMasterData.floatingShelf} per Pc
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Box>
                    <Typography variant="h6" gutterBottom component="div">
                      Payment Details
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Installation Price: </strong>₹{bill.installationArea}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Light Connection Price: </strong>₹{bill.lightConnection}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Floating Shelf Price: </strong>₹{bill.floatingShelf}
                    </Typography>
                  </Box>
                  {rateMasterData.state !== 'Delhi (NCT)' ? (
                    <Box>
                      <Typography variant="body1" gutterBottom component="div">
                        <strong>Additional Price: </strong>
                        ₹1150 per day
                      </Typography>
                    </Box>
                  ) : null}
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Total: </strong>₹{bill.total}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Button variant="contained" color="primary">
                  Pay Now
                </Button>
              </Box>
            </Card>
          ) : null}
          {shortServiceBill ? (
            <Card
              sx={{
                p: 2,
                mt: 4,
                backgroundColor: 'primary.lighter',
                border: '1px solid',
                borderColor: 'primary.light',
              }}
            >
              <Box>
                <Typography variant="h5" gutterBottom component="div">
                  Payment Summary
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Box>
                    <Typography variant="h6" gutterBottom component="div">
                      Order Details
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Service Type: </strong>
                      {rateMasterData.serviceType}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Service Name: </strong>
                      {rateMasterData.name}
                    </Typography>
                  </Box>
                  {addOnServices.map((service, index) => {
                    const serviceName = camelCase(service.name);
                    if (addOnServiceData[serviceName] === true) {
                      return (
                        <Box key={index}>
                          <Typography variant="body1" gutterBottom component="div">
                            <strong>Add-On Services: </strong>
                            {service.name}
                          </Typography>
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Box>
                    <Typography variant="h6" gutterBottom component="div">
                      Payment Details
                    </Typography>
                  </Box>
                  {addOnServices.map((service, index) => {
                    const serviceName = camelCase(service.name);
                    if (addOnServiceData[serviceName] === true) {
                      return (
                        <Box key={index}>
                          <Typography variant="body1" gutterBottom component="div">
                            <strong>{service.name}: </strong>₹{service.rates}
                          </Typography>
                        </Box>
                      );
                    }
                    return null;
                  })}
                  {rateMasterData.state !== 'Delhi (NCT)' && rateMasterData.state !== 'Maharashtra' ? (
                    <Box>
                      <Typography variant="body1" gutterBottom component="div">
                        <strong>Additional Charges: </strong>₹{bill.food} per day for food & ₹{bill.localFair} per day
                        for local fair
                      </Typography>
                    </Box>
                  ) : null}
                  <Box>
                    <Typography variant="body1" gutterBottom component="div">
                      <strong>Total: </strong>₹{bill.total}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Button variant="contained" color="primary">
                  Pay Now
                </Button>
              </Box>
            </Card>
          ) : null}
        </Container>
      </Page>
    </>
  );
};

export default RateMaster;
