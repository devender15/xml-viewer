export const parseXMLToTree = (xml: string): any => {
    return {
      root: {
        node1: {
          subnode1: 'value1',
          subnode2: 'value2',
        },
        node2: {
          subnode3: 'value3',
        },
      },
    };
  };
  