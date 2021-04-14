const endpoints: [
  {
    id: 'payment-gateway-123'
    name: 'mpesa',
    description: 'allows you to initiate payments',
    networkAddress: 'something.gov:4000',

    // list of services that this BB provides to others
    providesServices: [
      { name: 'payments', baseEndpoint: '/api/payments', desc: 'something', apiDocs: 'some-url' },
      ...otherServices
    ],

    // a list of other enpoints that can make requests to my services
    allowRequestsFrom: [ 'child-protection-123', 'registration-987' ],
  },
  {
    id: 'registration-987'
    name: 'child-registry',
    description: 'allows you to register people',
    networkAddress: 'something-else.gov:88',
    providesServices: [
      { name: 'registration', baseEndpoint: '/api/v2/', desc: 'something', apiDocs: 'some-url' },
      ...otherServices
    ],
    allowRequestsFrom: [ 'child-protection-123', 'payments-gateway-123' ],
      
    // a list of message types to 'subscribe to' for multicast
    subscribesToMessageTypes: [
      { type: 'patientRegistration', endpoint: '/api/v2/newPatient' },
      { type: 'patientReferral', endpoint: '/api/v2/referralMade' }
    ],
  }
];