package dsaLearning.com;

import java.util.Scanner;

public class Main {

	static ReverseNumber rs1=new ReverseNumber();
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Please enter the n  : ");
		int n=sc.nextInt();
		
		int result=rs1.reverse(n);
		System.out.println(result);
		

	}

}
