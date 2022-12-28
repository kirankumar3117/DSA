package dsaLearning.com;

import java.util.Scanner;

public class Main {

//	static ReverseNumber rs1=new ReverseNumber();
	// Is Prime or not 
//	static IsPrime ip = new IsPrime();
	// Is ArmStrong
	static IsArmstrong ar=new IsArmstrong();
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Please enter the n  : ");
		int n=sc.nextInt();
		
		boolean b1=ar.isArmstrong(n);
		
		System.out.println(b1);
		
//		int result=rs1.reverse(n);
//		System.out.println(result);
		

	}

}
