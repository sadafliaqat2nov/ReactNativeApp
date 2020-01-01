import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity, Alert, 
	Button, ActivityIndicator, 
	Grid, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header, Overlay, Input } from 'react-native-elements';
import { Table, TableWrapper, Row, Cell, Col, Cols, Rows } from 'react-native-table-component';
import { Left, Right, Icon } from 'native-base';
import { TouchableHighlight, Touchable } from 'react-native-gesture-handler';

class Books extends Component {
  // constructor to initializing
	constructor(props) {
		super(props);
			this.state = {
				tableHead: ['Id', 'Name', 'Price', 'Preface', 'Descript.', 'Action'],
				//widthArr: [60, 110, 60, 90, 110, 130],
				widthArr: [100, 100, 100, 100, 100, 100],
				data: [],
				isVisible: false,
				isLoading: true,
				name: '',
		    	price: '',
				preface: '',
				description: '',
				updatename: '',
				updateprice: '',
				updatepreface: '',
				updatedescription: '',
				checkedElement:[],
			}
}
	// onPageLoad this function automatically call to fetch API data in table
	
componentDidMount() {
	fetch("https://9b7b4bbf.ngrok.io/api/v1/books", {
		method: 'GET',
		headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'jPcgygrkuw9REJYBXe8b'
		}
	})
	.then(response => {
			if (response.ok) {
					response.json().then(jsonData => {
							const vtableData = [];
							jsonData.map((rowData) => {
									const vrowData = [];
									Object.keys(rowData).forEach(function (key) {
											vrowData.push(rowData[key]);
									});
										vtableData.push(vrowData);
							})
							this.setState({
									data: vtableData,
									isLoading: false
							});
					});
			}
	})
	.catch((error) => {
			//console.log(error);
	});
}

//  OnPress save button, overlay form data create the book
createBook(){
	fetch('https://9b7b4bbf.ngrok.io/api/v1/books', {    
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		},
		body: JSON.stringify({
				name: this.state.name,
				price: this.state.price,
				preface: this.state.preface,
				description: this.state.description,
		})	
	})
	.then((response) => {
		if(response.status == 200){
			alert('Successfully, Book is inserted in table!');
			this.toggleOverlay(!this.state.isVisible); 
			//console.log(response);
	}
		else {
			alert('Please Enter Valid Information');
			//console.log(error);
	}
	})
	.catch((error) => { 
			//console.log(error); 
	})  
}

 //  OnPress save button, overlay form data update the book

// editBook(edit){ 
// 	 console.log(edit)
// 	fetch('https://9b7b4bbf.ngrok.io/api/v1/books/', {   
// 		method: 'put',
// 		headers: {
// 		'Accept': 'application/json',
// 		'Content-Type': 'application/json',
// 		'Authorization': 'jPcgygrkuw9REJYBXe8b'
// 		},
// 		body: JSON.stringify({
// 				name: 'name',
// 				price: '',
// 				preface: 'this.state.updatepreface',
// 				description: 'this.state.updatedescription',
// 		})	
// })
// 	.then((response) => {
		 
// 		if(response.status == 200){
// 			alert('Successfully, Book is updated in table!');
// 			console.log(response);
// 	}
// 		else {
// 			alert('Please Enter Valid Information');
// 			console.log(error);
// 	}
// 	})
// 	.catch((error) => { 
// 			console.log(error); 
// 	})  
// }

//  OnPress delete button, book delete from table

deleteBook(del){		 
	fetch('https://9b7b4bbf.ngrok.io/api/v1/books/'+ this[0], {
		method: 'DELETE', 
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'jPcgygrkuw9REJYBXe8b'
		},
	 }) 
		.then(response => {
			if(response.status == 200){
				alert('Successfully, Book is deleted from table!');
				//console.log(response);
		}
			else {
				alert('Unfortunately, Book is not deleted!');
				//console.log(error);
		}
		})
	.catch((error) => { 
			//console.log(error); 
	})  
}
	
	// press close button on overlay, overlay will be hide 
		
	toggleOverlay(visible) {
		this.setState({ isVisible: visible});
	}	

// onPress row navigate to show details of respective book

	DetailsShow(data,nstate) {
		fetch("https://9b7b4bbf.ngrok.io/api/v1/books/" + this[0], {
			method: 'GET',
			headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'jPcgygrkuw9REJYBXe8b'
			}
		})
		.then(response => response.json())
		.then(jsonData => {
				data.props.navigation.navigate('Details', {
						data: jsonData
				});
		});
}	

render() {
	const state = this.state;
	const newstate = this;
	const element = (data) => (
		<View style={styles.btnView1}>
				<TouchableOpacity style={styles.edit} onPress={() => { this.toggleOverlay(true) }}>
						<Text style={{ fontFamily: 'monospace',textAlign:'center', justifyContent: 'center',fontWeight: 'bold', padding: 3, fontSize: 18, alignItems:'center', color: '#fff' }}>
						<Icon name="create" style={{ color: '#fff', fontSize: 25 }}></Icon>
						</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.trash} onPress={this.deleteBook.bind(data)}>
						<Text style={{ fontFamily: 'monospace', textAlign:'center', justifyContent: 'center', fontWeight: 'bold', padding: 3, fontSize: 18, alignItems:'center', color: '#fff' }}>
						<Icon name="trash" style={{ color: '#fff', fontSize: 25 }}></Icon>
						</Text>
				</TouchableOpacity>
		</View>
		);
		return (
			<View style={styles.container}>
					<Header
							leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
					/>
					<Text style={styles.books}>Library Books</Text>

				{/* Overlay to create a book in table */}
<Overlay transparent={true} isVisible={this.state.isVisible}>
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
	<View style={styles.overlay}>
			<Text style={styles.formText}>Add Information about Book!</Text>
			<Icon
							name='book'
							style={styles.overlayIcons1}
			/>
			<Input placeholder='Name...'
					onChangeText={name => this.setState({ name })} 
					leftIcon={ <Icon
					name='book'
					style={styles.overlayIcons}
					/>
			}
			/>
			<Input placeholder='Price...' 
					onChangeText={price => this.setState({ price })}
					leftIcon={ <Icon
					name='pricetag'
					style={styles.overlayIcons}
					/>
			}
			/>
			<Input placeholder='Preface...' 
					onChangeText={preface => this.setState({ preface })}
					leftIcon={ <Icon
					name='list-box'
					style={styles.overlayIcons}
					/>
			}
			/>
			<Input placeholder='Description...' 
					onChangeText={description => this.setState({ description })}
					leftIcon={ <Icon
					name='document'
					style={styles.overlayIcons}
					/>
			}
			/>

			<View style={styles.btnView} >
			<TouchableOpacity style={styles.closeBtn1} onPress={this.createBook.bind(this)}>
					<Text style={{ fontFamily: 'monospace',textAlign:'center', justifyContent: 'center',fontWeight: 'bold', padding: 3, fontSize: 18, alignItems:'center', color: '#fff' }}>
					Save <Icon name="checkmark-circle" style={{ color: '#fff', fontSize: 22 }}></Icon>
					</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.closeBtn} onPress={() => 
							{this.toggleOverlay(!this.state.isVisible) }}>
					<Text style={{ fontFamily: 'monospace', textAlign:'center', justifyContent: 'center', fontWeight: 'bold', padding: 3, fontSize: 18, alignItems:'center', color: '#fff' }}>
					Close <Icon name="close" style={{ color: '#fff', fontSize: 20 }}></Icon>
					</Text>
			</TouchableOpacity>
			</View>
		</View>
		</TouchableWithoutFeedback>
</Overlay>
		<TouchableOpacity style={styles.buttonContainer} onPress={() => { this.toggleOverlay(true) }}>
				<Text style={styles.btnText}>Create Book <Icon name="add-circle" style={{ color: '#fff', fontSize: 25 }}></Icon></Text>
		</TouchableOpacity>

{/* Overlay to create a book in table */}
<Overlay transparent={true} isVisible={this.state.isVisible}>
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
	<View style={styles.overlay}>
			<Text style={styles.formText}>Update Information about Book!</Text>
			<Icon
							name='book'
							style={styles.overlayIcons1}
			/>
			<Input placeholder='Name...'
					onChangeText={updatename => this.setState({ updatename })} 
					leftIcon={ <Icon
					name='book'
					style={styles.overlayIcons}
					//value={this.state.checkedElement.length > 0 ? this.state.checkedElement[1] : ' '}
					/>
			}
			/>
			<Input placeholder='Price...' 
					onChangeText={updateprice => this.setState({ updateprice })}
					leftIcon={ <Icon
					name='pricetag'
					style={styles.overlayIcons}
					//value={this.state.checkedElement.length > 0 ? this.state.checkedElement[2] : ' '}
					/>
			}
			/>
			<Input placeholder='Preface...' 
					onChangeText={updatepreface => this.setState({ updatepreface })}
					leftIcon={ <Icon
					name='list-box'
					style={styles.overlayIcons}
					//value={this.state.checkedElement.length > 0 ? this.state.checkedElement[3] : ' '}
					/>
			}
			/>
			<Input placeholder='Description...' 
					onChangeText={updatedescription => this.setState({ updatedescription })}
					leftIcon={ <Icon
					name='document'
					style={styles.overlayIcons}
					//value={this.state.checkedElement.length > 0 ? this.state.checkedElement[4] : ' '}
					/>
			}
			/>

			<View style={styles.btnView}>
			<TouchableOpacity style={styles.closeBtn1}>
					<Text style={{ fontFamily: 'monospace',textAlign:'center', justifyContent: 'center',fontWeight: 'bold', padding: 3, fontSize: 18, alignItems:'center', color: '#fff' }}>
					Save <Icon name="checkmark-circle" style={{ color: '#fff', fontSize: 22 }}></Icon>
					</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.closeBtn} onPress={() => 
							{this.toggleOverlay(!this.state.isVisible) }}>
					<Text style={{ fontFamily: 'monospace', textAlign:'center', justifyContent: 'center', fontWeight: 'bold', padding: 3, fontSize: 18, alignItems:'center', color: '#fff' }}>
					Close <Icon name="close" style={{ color: '#fff', fontSize: 20 }}></Icon>
					</Text>
			</TouchableOpacity>
			</View>
		</View>
		</TouchableWithoutFeedback>
</Overlay>

		{/* table which display details of book */}
		<ScrollView horizontal={true}>
				<View>
				<Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
					<Row data={state.tableHead} widthArr={state.widthArr} style={styles.head} textStyle={styles.texthead}/>
				</Table>
				{this.state.isLoading && (
					<Modal
					transparent
					animationType={'none'}
					>
					<View style={styles.modalBackground}>
					<View style={styles.activityIndicatorHolder}>
					<ActivityIndicator
					size="large"
					color="#037699"
					/>
					<Text style={styles.texthead} style={{color:'#037699'}}>Loading...</Text>
					</View>
					</View>
					</Modal>
				)}
				<ScrollView vertical={true}>
				<Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
						{ 
							state.data.map((rowData, index) => ( 
							<TableWrapper 
							key={index}
							style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
							textStyle={styles.text} 
							// onPress = {this.DetailsShow.bind (newstate)}
							>
							{ 
								rowData.slice(0, 6).map((cellData, cellIndex) => (
									<Cell onPress = {this.DetailsShow.bind(rowData, newstate)} key={cellIndex} 
									style={{width: 100}} data={cellIndex == 5 ? element(rowData) : cellData} 
									textStyle={styles.text}/>
								))
							}
							</TableWrapper>
							))
						}
					</Table>
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	);
}
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F6E7' },
    head: { height: 45, backgroundColor: '#F7F6E7' },
    text: {
        margin: 10, justifyContent: 'center', fontSize: 13,
        alignItems: 'center', alignSelf: "center"
    },
    texthead: {
        margin: 10, justifyContent: 'center', fontWeight: 'bold', fontSize: 14, fontFamily: 'monospace',
        alignItems: 'center', alignSelf: "center"
    },
    formText:{
        margin: 10, justifyContent: 'center', fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace',
        alignItems: 'center', alignSelf: "center", color:'#1671B0',
    },
    books: { margin: 10, fontFamily: 'monospace', fontWeight: 'bold', alignSelf: 'center', fontSize: 20 },
    btnText: {
        textAlign: 'center', color: '#fff', fontWeight: 'bold',
        fontFamily: 'monospace', justifyContent: 'center', alignSelf: 'center', fontSize: 22
    },
    buttonContainer: {
        marginTop: 5,
        height: 38,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        alignSelf: 'center',
        width: 200,
        borderRadius: 20,
        backgroundColor: "#1671B0",
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, .5)"
     },
     overlayIcons: {
        color:'#1671B0', 
        fontSize: 24, 
        marginRight: 30
     },
     overlayIcons1: {
        color:'#1671B0', 
        fontSize: 60, 
        alignSelf: 'center',
        marginBottom: 30,
     },
     closeBtn: {
        height: 30,
        width: 110,
        borderRadius: 14,
        margin: 12,
        alignSelf: 'center',
        textAlign:'center',
        backgroundColor: '#E24234',
     },
     closeBtn1: {
        height: 30,
        width: 110,
        borderRadius: 14,
        margin: 12,
        alignSelf: 'center',
        textAlign:'center',
        backgroundColor: '#1671B0'
     },
     edit: {
        height: 30,
        width: 35,
        borderRadius: 10,
        margin: 5,
        alignSelf: 'center',
        textAlign:'center',
        backgroundColor: '#1671B0'
     },
     trash: {
        height: 30,
        width: 35,
        borderRadius: 10,
        margin: 5,
        alignSelf: 'center',
        textAlign:'center',
        backgroundColor: '#E24234'
     },
     btnView: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
     },
     btnView1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
     },
      modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000041',
      },
      activityIndicatorHolder: {
        color:'#0000ff',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        height: 90,
        width: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
			},
			row: { 
			flexDirection: 'row',
			height: 40, 
			backgroundColor: '#E7E6E1' },
		});

export default Books;


{/* <Table borderStyle={{borderWidth: 2, borderColor: '#C1C0B9'}}>
                            { 
                                    state.data.map((rowData, index) => ( 
                                    <Row 
                                    key={index}
                                    data={rowData}
                                    widthArr={state.widthArr}
                                    style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
																		textStyle={styles.text}
                                    ></Row>
                                    ))
                            }
                            </Table> */}


{/* <View style={styles.btnView1}>
    <TouchableOpacity style={styles.edit}>
        <Text style={{ fontFamily: 'monospace',textAlign:'center', justifyContent: 'center',fontWeight: 'bold', padding: 3, fontSize: 18, alignItems:'center', color: '#fff' }}>
        <Icon name="create" style={{ color: '#fff', fontSize: 25 }}></Icon>
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.trash}>
        <Text style={{ fontFamily: 'monospace', textAlign:'center', justifyContent: 'center', fontWeight: 'bold', padding: 3, fontSize: 18, alignItems:'center', color: '#fff' }}>
        <Icon name="trash" style={{ color: '#fff', fontSize: 25 }}></Icon>
        </Text>
    </TouchableOpacity>
</View> */}