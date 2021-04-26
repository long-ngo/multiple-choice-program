import { Component } from 'react';
import '../Question.css';

class Question extends Component {
    constructor(props) {
        super(props);
        this.data = [
            {
                name: 'Câu 1',
                title:
                    'Trong các độ dài 5000mm, 50m, 500cm, 5dm độ dài lớn nhất là:',
                choose: {
                    A: '50m',
                    B: '5000m',
                    C: '5dm',
                    D: '300cm'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 2',
                title:
                    'Nếu ngày 19 tháng 5 là thứ bảy thì ngày 10 tháng 5 cùng năm đó là:',
                choose: {
                    A: 'Thứ tư',
                    B: 'Thứ bảy',
                    C: 'Thứ sáu',
                    D: 'Thứ năm'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 3',
                title:
                    'Chị có 9600 đồng. Chị đã mua sách hết 1/3 số tiền đó. Vậy số tiền chị còn lại là:',
                choose: {
                    A: '3200 đồng',
                    B: '6400 đồng',
                    C: '2300 đồng',
                    D: '4600 đồng'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 4',
                title:
                    'Ngày 26 tháng 11 là thứ năm. Ngày 2 tháng 12 cùng năm đó là:',
                choose: {
                    A: 'Thứ năm',
                    B: 'Thứ bảy',
                    C: 'Thứ sáu',
                    D: 'Thứ tư'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 5',
                title:
                    'Bà mua 3 kg gạo, giá một ki-lô-gam là 2600 đồng. Bà đưa cô bán gạo 10000 đồng. Vậy cô bán hàng phải trả lại: ',
                choose: {
                    A: '2200 đồng',
                    B: '2600 đồng',
                    C: '2800 đồng',
                    D: '2700 đồng'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 6',
                title: 'Dãy số nào viết theo thứ tự từ bé đến lớn:',
                choose: {
                    A: '8271, 8270, 8289, 8265',
                    B: '7633, 7629, 7640, 7630',
                    C: '5208, 5272, 5369, 5414',
                    D: '6925, 6924, 6923, 6922'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 7',
                title: 'Trong một năm những tháng dương lịch có 31 ngày là:',
                choose: {
                    A: 'Tháng 1, tháng 3, tháng 5, tháng 7',
                    B: 'Tháng 9, tháng 11, tháng 12',
                    C: 'Tháng 8, tháng 10, tháng 12',
                    D: 'Cả 2 ý A và C đúng'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 8',
                title: 'Kết quả của phép chia: 72 cm2 : 9 = ?',
                choose: {
                    A: '9 cm2',
                    B: '8 cm2',
                    C: '8 cm',
                    D: '7 cm2'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 9',
                title: 'Kết quả của phép nhân: 25 cm2 x 7 = ?',
                choose: {
                    A: '145 cm2',
                    B: '175',
                    C: '175cm2',
                    D: '175cm'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 10',
                title: 'Kết quả của phép cộng: 375cm2 + 567cm2 = ?',
                choose: {
                    A: '932 cm2',
                    B: '842 cm2',
                    C: '942 cm',
                    D: '942 cm2'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 11',
                title: 'Chọn câu đúng',
                choose: {
                    A: '7 cm2 + 22cm2 < 4 cm2 x 7',
                    B: '540 cm2 : 2 = 80 cm2 x 2',
                    C: '532 cm2 - 62 cm2 > 30 cm2 x 9',
                    D: '46 cm2 x 3 < 36 cm2 x 4'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 12',
                title:
                    'Một miếng bìa hình chữ nhật có diện tích là 56 cm2, chiều rồng là 7 cm. Chiều dài hình chữ nhật là:',
                choose: {
                    A: '21 cm',
                    B: '20 cm',
                    C: '8 cm',
                    D: '9 cm'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 13',
                title:
                    'Một hình chữ nhật có chiều rộng 6cm, chiều dài gấp 2 lần chiều rộng. Diện tích hình chữ nhật là',
                choose: {
                    A: '12 cm2',
                    B: '72 cm2',
                    C: '36 cm2',
                    D: '48 cm2'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 14',
                title: 'Chọn câu đúng',
                choose: {
                    A: '',
                    B: '',
                    C: '',
                    D: ''
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 15',
                title: 'Số lớn nhất có 5 chữ số là:',
                choose: {
                    A: '19999',
                    B: '29999',
                    C: '49999',
                    D: '99999'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 16',
                title:
                    'Trong chuồn gà người ta đếm được tất cả 168 cái chân. Hỏi chuồng gà đó có bao nhiêu con?',
                choose: {
                    A: '168 con',
                    B: '84 con',
                    C: '42 con',
                    D: '336 con'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 17',
                title: 'Số dư của phép chia 54987 : 8 là:',
                choose: {
                    A: '3',
                    B: '4',
                    C: '6',
                    D: '7'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 18',
                title: 'Số dư lớn nhất của phép chia có số bị chia là 9 là:',
                choose: {
                    A: '1',
                    B: '3',
                    C: '5',
                    D: '8'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 19',
                title: 'Muốn tìm số bị chia ta lấy:',
                choose: {
                    A: 'Thương chia cho số bị chia',
                    B: 'Số bị chia chia cho thương',
                    C: 'Thương nhân với số chia',
                    D: 'Số chia chia cho thương'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 20',
                title: 'Muốn tính diện tích hình chữ nhật:',
                choose: {
                    A: 'Ta lấy chiều dài cộng chiều rộng rồi nhân 2',
                    B: 'Ta lấy một cạnh nhân với chính nó',
                    C: 'Ta lấy chiều dài nhân với chiều rộng (cùng đơn vị đo)',
                    D: 'Ta chiều dài chia chiều rộng'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 21',
                title: 'Cho hình vẽ bên:',
                choose: {
                    A: 'Diện tích hình 1 bằng diện tích hình 2',
                    B: 'Diện tích hình 2 lớn hơn hình 1',
                    C: 'Diện tích hình 1 gấp 2 lần hình 2',
                    D: 'Diện tích hình 2 gấp 2 lần hình 1'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 22',
                title:
                    'An nghĩ một số. Biết rằng số đó gấp 3 lần thì bằng số lớn nhất có hai chữ số. Số An đã nghĩ là:',
                choose: {
                    A: '22',
                    B: '33',
                    C: '99',
                    D: '297'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 23',
                title:
                    'Trong các phép chia có dư, số chia là 4 thì số dư có thể là nhưng số:',
                choose: {
                    A: '1',
                    B: '2',
                    C: '3',
                    D: 'Tất cả các số 1, 2, 3'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 24',
                title: 'Chu vi hình vuông là 172 cm, cạnh hình vuôn là:',
                choose: {
                    A: '86 cm',
                    B: '43 cm',
                    C: '128 cm',
                    D: '32 cm'
                },
                correctAnswer: 'A'
            },
            {
                name: 'Câu 25',
                title: 'Cạnh hình vuông có chu vi 96 cm là',
                choose: {
                    A: '48 cm',
                    B: '8 cm',
                    C: '6 cm',
                    D: '24 cm'
                },
                correctAnswer: 'A'
            }
        ];

        this.state = {
            scores: 0,
            wrongSentence: 0,
            time: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const answer = this.data.filter((dataItem) => {
            return event.target.elements[dataItem.name].value === dataItem.correctAnswer;
        });

        this.setState({
            scores: (10 / this.data.length * answer.length).toFixed(1),
            wrongSentence: this.data.length - answer.length
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className="question">
                <h2 className="question__heading">
                    Trắc nghiệm ôn tập toán lớp 3
                </h2>
                <form className="question__list" onSubmit={this.handleSubmit}>
                    {this.data.map((question, key) => {
                        return (
                            <div className="question__list-item" key={key}>
                                <p className="question__list-item-title">
                                    {question.name} {question.title}
                                </p>

                                <div className="question__list-item-choose">
                                    <input
                                        type="radio"
                                        name={question.name}
                                        value="A"
                                    ></input>
                                    A. {question.choose.A}
                                </div>

                                <div className="question__list-item-choose">
                                    <input
                                        type="radio"
                                        name={question.name}
                                        value="B"
                                    ></input>
                                    B. {question.choose.B}
                                </div>

                                <div className="question__list-item-choose">
                                    <input
                                        type="radio"
                                        name={question.name}
                                        value="C"
                                    ></input>
                                    C. {question.choose.C}
                                </div>

                                <div className="question__list-item-choose">
                                    <input
                                        type="radio"
                                        name={question.name}
                                        value="D"
                                    ></input>
                                    D. {question.choose.D}
                                </div>
                            </div>
                        );
                    })}

                    <div className="question__show">
                        <button className="btn question__show-submit" type="submit">
                            Nộp bài
                        </button>
                        <div className="question__show-result">
                            <p>Điểm: {this.state.scores}</p>
                            <p>Số câu sai: {this.state.wrongSentence}</p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Question;
