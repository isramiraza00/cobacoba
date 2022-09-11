const data = {
		labels: [
		    'Normal',
		    'Stanting',
		    'Kurang Gizi',
		],
		datasets: [{
		    label: 'My First Dataset',
		    data: [75, 25, 25],
		    backgroundColor: [
		     	'#3EC15B',
		    	'#F27E59',
		    	'#FFB800'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	const counter = {
		id: 'counter',
		beforeDraw( chart, args, options ){
			const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
			ctx.save();
			ctx.font = options.fontSize + 'em ' + options.fontFamily;
			ctx.textAlign = 'center';
			ctx.fillStyle = options.fontColor;
			ctx.fillText('Total: 10000', width / 2, (height / 2) + (options.fontSize * 0.34));
		}
	};

  const config = {
    type: 'doughnut',
    data: data,
    options: {
    	plugins: {
    		legend: {
    			position: 'right',
    			align: 'start'

    		},
    		counter: {
    			fontColor: '#333',
    			fontSize: 1.2,
    			fontFamily: 'sans-serif'
    		}
    	},
    },
    plugins: [counter]
  };


  // --------------------------------
  // Data Stanting
	const dataStanting = {
		labels: [
		    'Stanting',
		    'NULL'
		],
		datasets: [{
		    label: 'Data Stanting',
		    data: [25, 75],
		    backgroundColor: [
		    	'#F27E59',
		     	'#C4C4C4'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	// Counter2
	const counter2 = {
			id: 'counter2',
			beforeDraw( chart, args, options ){
				const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
				ctx.save();
				ctx.font = options.fontSize + 'em ' + options.fontFamily;
				ctx.textAlign = 'center';
				ctx.fillStyle = options.fontColor;
				ctx.fillText(25 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
			}
		};

  // Config Data Stanting
  const configStanting = {
    type: 'doughnut',
    data: dataStanting,
    options: {
    	plugins: {
    		legend: {
    			display: false

    		},
    		counter2: {
    			fontColor: '#F27E59',
    			fontSize: 1.2,
    			fontFamily: 'sans-serif'
    		}
    	}
    },
    plugins: [counter2]
  };

    // --------------------------------
  	// Data Kurang Gizi
	const dataKgizi = {
		labels: [
		    'Kurang Gizi',
		    'NULL'
		],
		datasets: [{
		    label: 'Data Kurang Gizi',
		    data: [25, 75],
		    backgroundColor: [
		    	'#FFB800',
		     	'#C4C4C4'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	// Counter3
	const counter3 = {
			id: 'counter3',
			beforeDraw( chart, args, options ){
				const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
				ctx.save();
				ctx.font = options.fontSize + 'em ' + options.fontFamily;
				ctx.textAlign = 'center';
				ctx.fillStyle = options.fontColor;
				ctx.fillText(25 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
			}
		};

  // Config Data Kurang Gizi
  const configKg = {
    type: 'doughnut',
    data: dataKgizi,
    options: {
    	plugins: {
    		legend: {
    			display: false

    		},
    		counter3: {
    			fontColor: '#F27E59',
    			fontSize: 1.2,
    			fontFamily: 'sans-serif'
    		}
    	}
    },
    plugins: [counter3]
  };

  	// --------------------------------
  	// Data Normal
	const dataNormal = {
		labels: [
		    'Normal',
		    'NULL'
		],
		datasets: [{
		    label: 'Data Normal',
		    data: [75, 25],
		    backgroundColor: [
		    	'#3EC15B',
		     	'#C4C4C4'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	// Counter4
	const counter4 = {
			id: 'counter4',
			beforeDraw( chart, args, options ){
				const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
				ctx.save();
				ctx.font = options.fontSize + 'em ' + options.fontFamily;
				ctx.textAlign = 'center';
				ctx.fillStyle = options.fontColor;
				ctx.fillText(75 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
			}
		};

  // Config Data Normal
  const configNormal = {
    type: 'doughnut',
    data: dataNormal,
    options: {
    	plugins: {
    		legend: {
    			display: false

    		},
    		counter4: {
    			fontColor: '#F27E59',
    			fontSize: 1.2,
    			fontFamily: 'sans-serif'
    		}
    	}
    },
    plugins: [counter4]
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  const myChartS = new Chart(
    document.getElementById('myChartS'),
    configStanting
  );
  const myChartKg = new Chart(
    document.getElementById('myChartKg'),
    configKg
  );
  const myChartNormal = new Chart(
    document.getElementById('myChartNormal'),
    configNormal
  );


  // ----------------
 const labels = ['01','02','03','04','05','06','07','08','09','10','11','12'];

  const dataImun = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: '#28BEC5',
      borderColor: 'rgb(255, 99, 132)',
      data: [200, 200, 200, 200, 200, 400, 600],
      borderRadius: 20,
    }]
  };
  const configImun = {
    type: 'bar',
    data: dataImun,
    options: {
    	plugins: {
    		legend: {
    			display: false
    		}
    	}
    },
  };

 const myChartImun = new Chart(
    document.getElementById('myChartImun'),
    configImun
  );


 // Persentase Imun Wajib

// DataP0
	const dataP0 = {
		labels: [
		    'Stanting',
		    'NULL'
		],
		datasets: [{
		    label: 'Data Stanting',
		    data: [25, 75],
		    backgroundColor: [
		    	'#28BEC5',
		     	'#C4C4C4'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	const counterP0 = {
			id: 'counterP0',
			beforeDraw( chart, args, options ){
				const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
				ctx.save();
				ctx.font = options.fontSize + 'em ' + options.fontFamily;
				ctx.textAlign = 'center';
				ctx.fillStyle = options.fontColor;
				ctx.fillText(25 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
			}
		};

  const configP0 = {
    type: 'doughnut',
    data: dataP0,
    options: {
    	plugins: {
    		legend: {
    			display: false

    		},
    		counterP0: {
    			fontColor: '#28BEC5',
    			fontSize: 1,
    			fontFamily: 'sans-serif'
    		}
    	}
    },
    plugins: [counterP0]
  };

  const myChart0 = new Chart(
    document.getElementById('myChart0'),
    configP0
  );


  // Data 1
	const dataP1 = {
		labels: [
		    'Stanting',
		    'NULL'
		],
		datasets: [{
		    label: 'Data Stanting',
		    data: [25, 75],
		    backgroundColor: [
		    	'#28BEC5',
		     	'#C4C4C4'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	const counterP1 = {
			id: 'counterP1',
			beforeDraw( chart, args, options ){
				const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
				ctx.save();
				ctx.font = options.fontSize + 'em ' + options.fontFamily;
				ctx.textAlign = 'center';
				ctx.fillStyle = options.fontColor;
				ctx.fillText(25 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
			}
		};

  const configP1 = {
    type: 'doughnut',
    data: dataP1,
    options: {
    	plugins: {
    		legend: {
    			display: false

    		},
    		counterP1: {
    			fontColor: '#28BEC5',
    			fontSize: 1,
    			fontFamily: 'sans-serif'
    		}
    	}
    },
    plugins: [counterP1]
  };

  const myChart1 = new Chart(
    document.getElementById('myChart1'),
    configP1
  );

   // Data 2
	const dataP2 = {
		labels: [
		    'Stanting',
		    'NULL'
		],
		datasets: [{
		    label: 'Data Stanting',
		    data: [25, 75],
		    backgroundColor: [
		    	'#28BEC5',
		     	'#C4C4C4'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	const counterP2 = {
			id: 'counterP2',
			beforeDraw( chart, args, options ){
				const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
				ctx.save();
				ctx.font = options.fontSize + 'em ' + options.fontFamily;
				ctx.textAlign = 'center';
				ctx.fillStyle = options.fontColor;
				ctx.fillText(25 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
			}
		};

  const configP2 = {
    type: 'doughnut',
    data: dataP2,
    options: {
    	plugins: {
    		legend: {
    			display: false

    		},
    		counterP2: {
    			fontColor: '#28BEC5',
    			fontSize: 1,
    			fontFamily: 'sans-serif'
    		}
    	}
    },
    plugins: [counterP2]
  };

  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    configP2
  );

     // Data 3
	const dataP3 = {
		labels: [
		    'Stanting',
		    'NULL'
		],
		datasets: [{
		    label: 'Data Stanting',
		    data: [25, 75],
		    backgroundColor: [
		    	'#28BEC5',
		     	'#C4C4C4'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	const counterP3 = {
			id: 'counterP3',
			beforeDraw( chart, args, options ){
				const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
				ctx.save();
				ctx.font = options.fontSize + 'em ' + options.fontFamily;
				ctx.textAlign = 'center';
				ctx.fillStyle = options.fontColor;
				ctx.fillText(25 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
			}
		};

  const configP3 = {
    type: 'doughnut',
    data: dataP3,
    options: {
    	plugins: {
    		legend: {
    			display: false

    		},
    		counterP3: {
    			fontColor: '#28BEC5',
    			fontSize: 1,
    			fontFamily: 'sans-serif'
    		}
    	}
    },
    plugins: [counterP3]
  };

  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    configP3
  );


  // Data 4
	const dataP4 = {
		labels: [
		    'Stanting',
		    'NULL'
		],
		datasets: [{
		    label: 'Data Stanting',
		    data: [25, 75],
		    backgroundColor: [
		    	'#28BEC5',
		     	'#C4C4C4'
			],
		    hoverOffset: 4,
		    cutout: '85%',
		    borderRadius: 20,
		    offset: -5,
  		}]
	};

	const counterP4 = {
			id: 'counterP4',
			beforeDraw( chart, args, options ){
				const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
				ctx.save();
				ctx.font = options.fontSize + 'em ' + options.fontFamily;
				ctx.textAlign = 'center';
				ctx.fillStyle = options.fontColor;
				ctx.fillText(25 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
			}
		};

  const configP4 = {
    type: 'doughnut',
    data: dataP4,
    options: {
    	plugins: {
    		legend: {
    			display: false

    		},
    		counterP4: {
    			fontColor: '#28BEC5',
    			fontSize: 1,
    			fontFamily: 'sans-serif'
    		}
    	}
    },
    plugins: [counterP4]
  };

  const myChart4 = new Chart(
    document.getElementById('myChart4'),
    configP4
  );