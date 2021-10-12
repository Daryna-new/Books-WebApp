#--------------------------------------------------
# Terraform scheme for CICD
# by Dary
#--------------------------------------------------
provider "aws" {
  region                  = "us-east-1"
  shared_credentials_file = "/CICD/.aws/credentials"
}

data "aws_ami" "latest_ubuntu" {
  owners      = ["099720109477"]
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-*"]
  }
}
#resource "aws_eip" "my_static_ip" {
#  instance = aws_instance.linux.id
#}
#resource "tls_private_key" "this" {
#  algorithm = "RSA"
#}
#module "key_pair" {
#  source     = "terraform-aws-modules/key-pair/aws"
#  key_name   = "linuxa_ssh"
#  public_key = tls_private_key.this.public_key_openssh
#}
resource "aws_security_group" "prod" {
  name = "Dynamic Security Group"

  dynamic "ingress" {
    for_each = ["8080", "80", "443", "22", "3000"]
    content {
      from_port   = ingress.value
      to_port     = ingress.value
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
    }
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Owner = "Dary"
    Name  = "My SecurityGroup"
  }
}

resource "aws_instance" "jenkins_master" {
  ami                    = data.aws_ami.latest_ubuntu.id
  instance_type          = "t2.micro"
  key_name               = "ubuntu"
  vpc_security_group_ids = [aws_security_group.prod.id]
  user_data              = file("install_jenkins.sh")
  tags = {
    Name = "master"
  }
}
resource "aws_instance" "jenkins_slave" {
  ami                    = data.aws_ami.latest_ubuntu.id
  instance_type          = "t2.micro"
  key_name               = "ubuntu"
  vpc_security_group_ids = [aws_security_group.prod.id]
  user_data              = file("slave.sh")
  tags = {
    Name = "slave"
  }
}
