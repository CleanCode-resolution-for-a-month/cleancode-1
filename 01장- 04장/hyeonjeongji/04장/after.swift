//
//  ContentView.swift
//  lazyVGrid 연습
//
//  Created by 지현정 on 2021/10/07.
//
// Grid Item 옵션) adaprive: 계산해서 분할로 채움, flexible: 계산해서 하나만 채움
 
import SwiftUI


struct MyModel : Identifiable{
    
    let id = UUID()
    let title : String
    let content : String
    
}
// 더미 데이터를 가져오도록 함
extension MyModel{
    // 마이모델에 대한 인스턴스를 생성하지 않아도 접근해서 가져올 수 있도록
    static var dummyDataArray: [MyModel]{
        (1...2000).map{ (number: Int) in
            MyModel(title: "title: \(number)", content: "content: \(number)")
        }
    }
}

struct ContentView: View {
    
    var dummyDataArray = MyModel.dummyDataArray
    
    
    
    var body: some View {
        ScrollView{
            LazyVGrid(columns: [
                GridItem(.adaptive(minimum: 50)),
                GridItem(.fixed(50)),
                GridItem(.flexible(minimum: 50))
            ], spacing: 100, content: {
                ForEach(dummyDataArray, content:{ (dataItem: MyModel) in
                    Rectangle().foregroundColor(.blue)
                        .frame(height: 120)
                        .overlay(Text("\(dataItem.title)"))
                })
            })
        }
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
